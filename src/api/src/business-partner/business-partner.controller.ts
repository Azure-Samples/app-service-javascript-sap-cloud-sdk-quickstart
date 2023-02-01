import {
	Controller,
	Body,
	Get,
	HttpException,
	Param,
	Delete,
	HttpCode,
	Post,
	Put,
	Headers,
	Render
} from "@nestjs/common";
import {
	BusinessPartner,
	BusinessPartnerAddress,
} from "../../services/business-partner-service-1";
import { BusinessPartnerService } from "./business-partner.service";

@Controller('business-partner')
export class BusinessPartnerController {
	constructor(
		private readonly businessPartnerService: BusinessPartnerService,
	) {}

	@Get()
	@Render('bupa')
	async getBusinessPartners(@Headers() headers): Promise<object> {
		// retrieve X-MS-TOKEN-AAD-ACCESS-TOKEN token from request header
		const token = headers["x-ms-token-aad-access-token"];
		let businessPartners = await this.businessPartnerService
			.getAllBusinessPartners(token)
			.catch((error) => {
				throw this.createHttpException(
					"Failed to get business partners",
					error,
				);
			});
			//console.log(JSON.stringify(businessPartners));
		return { title: 'SAP Business Partners', bupas: businessPartners };
	}

	@Get('/:id')
	async getBusinessPartnerById(
		@Param('id') id: string,
		@Headers() headers,
	): Promise<BusinessPartner> {
		// retrieve X-MS-TOKEN-AAD-ACCESS-TOKEN token from request header
		const token = headers["x-ms-token-aad-access-token"];
		return await this.businessPartnerService
			.getBusinessPartnerById(id, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to get business partner by id ${id}`,
					error,
				);
			});
	}

	@Post('/:id/address')
  @HttpCode(201)
	async createAddress(
		@Body() requestBody: Record<string, any>,
		@Param('id') id: string,
		@Headers() headers,
	): Promise<BusinessPartnerAddress> {
		// retrieve X-MS-TOKEN-AAD-ACCESS-TOKEN token from request header
		const token = headers["x-ms-token-aad-access-token"];
		return await this.businessPartnerService
			.createAddress(requestBody, id, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to create address for business partner ${id}`,
					error,
				);
			});
	}

	@Put('/:businessPartnerId/address/:addressId')
	async updateBusinessPartnerAddress(
		@Body() requestBody: Record<string, any>,
		@Param('businessPartnerId') businessPartnerId: string,
		@Param('addressId') addressId: string,
		@Headers() headers,
	): Promise<BusinessPartnerAddress> {
		// retrieve X-MS-TOKEN-AAD-ACCESS-TOKEN token from request header
		const token = headers["x-ms-token-aad-access-token"];
		return await this.businessPartnerService
			.updateAddress(requestBody, businessPartnerId, addressId, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to update Business Partner ${businessPartnerId} address ${addressId}`,
					error,
				);
			});
	}

	@Delete('/:businessPartnerId/address/:addressId')
  @HttpCode(204)
	async deleteBusinessPartnerAddress(
		@Param('businessPartnerId') businessPartnerId: string,
		@Param('addressId') addressId: string,
		@Headers() headers,
	): Promise<void> {
		// retrieve X-MS-TOKEN-AAD-ACCESS-TOKEN token from request header
		const token = headers["x-ms-token-aad-access-token"];
		return await this.businessPartnerService
			.deleteAddress(businessPartnerId, addressId, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to delete address ${addressId} for business partner ${businessPartnerId}`,
					error,
				);
			});
	}

	/**
	 * Create HttpException from error
	 */
	private createHttpException(msg: string, error): HttpException {
		let responseData;
		let response;
		let trace = error.stack ? error.stack : "error.stack is undefined";
		let statusCode = 500;

		if (this.isValidError(error)) {
			if (error.cause.cause !== undefined) {
				response = error.cause.cause.response;
			} else {
				response = error.cause.response;
			}

			responseData = this.getFaultString(response.data);
			statusCode = response.status;
		} else {
			//default error message
			responseData = error.message;
			statusCode = 500;
		}

		if (process.env.DEBUG === "true") {
			return new HttpException(
				`${msg}- ${responseData} - ${trace}`,
				statusCode,
			);
		} else {
			return new HttpException(`${msg}- ${responseData}`, statusCode);
		}
	}

	/**
	 * get fault string from error
	 */
	private getFaultString(data: any): string {
		//handle SAP APIM / API Business Hub error messages
		if (data.message !== undefined) {
			return data.message;
		} //handle Azure APIM error messages
		else if (data.fault?.faultstring !== undefined) {
			return data.fault.faultstring;
		} //generic messages from SAP NetWeaver Gateway
		else {
			return data;
		}
	}

	/**
	 * Does cause exist on error?
	 */
	private isValidError(error: any): boolean {
		return (
			(error.cause?.cause?.response?.data !== undefined &&
				error.cause.cause.response.status !== undefined) ||
			(error.cause.response?.data !== undefined &&
				error.cause.response.status !== undefined)
		);
	}
}
