import { Injectable } from "@nestjs/common";
import { HttpDestinationOrFetchOptions } from "@sap-cloud-sdk/connectivity";
import {
	businessPartnerService1,
	BusinessPartner,
	BusinessPartnerAddress,
} from "../../services/business-partner-service-1";

const { businessPartnerApi, businessPartnerAddressApi } =
	businessPartnerService1();

@Injectable()
export class BusinessPartnerService {
	/**
	 * Gets a list of all business partners.
	 * @returns List of business partner.
	 */
	async getAllBusinessPartners(token: string): Promise<BusinessPartner[]> {
		const req = businessPartnerApi
			.requestBuilder()
			.getAll()
			.select(
				businessPartnerApi.schema.BUSINESS_PARTNER,
				businessPartnerApi.schema.FIRST_NAME,
				businessPartnerApi.schema.LAST_NAME,
				businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(
					businessPartnerAddressApi.schema.BUSINESS_PARTNER,
					businessPartnerAddressApi.schema.ADDRESS_ID,
				),
			)
			.top(20)
			.filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals("1"));

		return await req.execute(this.setupConfig(req, token));
	}

	/**
	 * Get a business partner by ID.
	 * @param id - ID of the business partner to be returned.
	 * @returns The business partner with the given ID.
	 */
	async getBusinessPartnerById(
		id: string,
		token: string,
	): Promise<BusinessPartner> {
		const req = businessPartnerApi
			.requestBuilder()
			.getByKey(id)
			.select(
				businessPartnerApi.schema.BUSINESS_PARTNER,
				businessPartnerApi.schema.FIRST_NAME,
				businessPartnerApi.schema.LAST_NAME,
				businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(
					businessPartnerAddressApi.schema.BUSINESS_PARTNER,
					businessPartnerAddressApi.schema.ADDRESS_ID,
					businessPartnerAddressApi.schema.POSTAL_CODE,
					businessPartnerAddressApi.schema.CITY_NAME,
					businessPartnerAddressApi.schema.STREET_NAME,
					businessPartnerAddressApi.schema.HOUSE_NUMBER,
				),
			);

		return await req.execute(this.setupConfig(req, token));
	}

	/**
	 * Creates an address for a business partner.
	 * @param address - Address which is added to the business partner.
	 * @param id - ID of the business partner.
	 * @returns The address which was created.
	 */
	async createAddress(
		address: Record<string, any>,
		id: string,
		token: string,
	): Promise<BusinessPartnerAddress> {
		const businessPartnerAddress = businessPartnerAddressApi
			.entityBuilder()
			.fromJson({ businessPartner: id, ...address });

		const req = businessPartnerAddressApi
			.requestBuilder()
			.create(businessPartnerAddress);

		return await req.execute(this.setupConfig(req, token));
	}

	/**
	 * Updates an address of a business partner.
	 * @param address - New address information after update. Existing values are overwritten, new ones are added.
	 * @param businessPartner - ID of business partner whose address is updated.
	 * @param addressId - ID of address which is updated.
	 * @returns - The address after update.
	 */
	async updateAddress(
		address: Record<string, any>,
		businessPartner: string,
		addressId: string,
		token: string,
	): Promise<BusinessPartnerAddress> {
		const businessPartnerAddress = businessPartnerAddressApi
			.entityBuilder()
			.fromJson({ businessPartner, addressId, ...address });

		const req = businessPartnerAddressApi
			.requestBuilder()
			.update(businessPartnerAddress);

		return await req.execute(this.setupConfig(req, token));
	}

	/**
	 * Deletes an address of a business partner.
	 * @param businessPartner - ID of the business partner to be updated.
	 * @param addressId - ID of address to be deleted.
	 * @returns - Void.
	 */
	async deleteAddress(
		businessPartner: string,
		addressId: string,
		token: string,
	): Promise<void> {
		const req = await businessPartnerAddressApi
			.requestBuilder()
			.delete(businessPartner, addressId);

		return await req.execute(this.setupConfig(req, token));
	}

	/**
	 * Setup config for the request.
	 * @param req - Request.
	 * @param token - AAD token.
	 * @returns - Destination Config for the request.
	 */
	private setupConfig(req, token: string): HttpDestinationOrFetchOptions {
		let config;
		// in case API key shall be used
		if (
			this.isValidString(process.env.APIKEY) &&
			this.isValidString(process.env.APIKEY_HEADERNAME)
		) {
			const keyHeaderName = process.env.APIKEY_HEADERNAME;
			const APIKey = process.env.APIKEY;
			req.addCustomHeaders({ [keyHeaderName]: APIKey });
		}
		// in case API trace header configured
		if (
			this.isValidString(process.env.API_TRACE_ACTIVE) &&
			this.isValidString(process.env.API_TRACE_HEADERNAME)
		) {
			const apiTraceHeaderName = process.env.API_TRACE_HEADERNAME;
			const activate =
				process.env.API_TRACE_ACTIVE.toLowerCase() === "true" ? true : false;
			req.addCustomHeaders({ [apiTraceHeaderName]: activate });
		}
		// in case AAD token is available
		if (this.isValidString(token)) {
			req.addCustomHeaders({ Authorization: `Bearer ${token}` });
			config = { url: process.env.ODATA_URL };
		} // in case basic auth shall be used
		else if (
			this.isValidString(process.env.ODATA_USERNAME) &&
			this.isValidString(process.env.ODATA_USERPWD)
		) {
			config = {
				url: process.env.ODATA_URL,
				username: process.env.ODATA_USERNAME,
				password: process.env.ODATA_USERPWD,
			};
		} // in case only API keys shall be used
		else {
			config = { url: process.env.ODATA_URL };
		}

		return config;
	}

	/**
	 * Check string validity.
	 * @param str - String to be checked.
	 * @returns - True if string is valid, false otherwise.
	 * @private
	 * @hidden
	 * @internal
	 *
	 */
	private isValidString(str: string): boolean {
		return str !== undefined && str != null && str !== "";
	}
}
