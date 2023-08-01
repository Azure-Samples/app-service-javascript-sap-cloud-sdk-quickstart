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
	Headers
} from "@nestjs/common";
import {
	BusinessPartner,
	BusinessPartnerAddress,
} from "../../services/business-partner-service-1";
import { BusinessPartnerService } from "./business-partner.service";
import { ErrorWithCause, createLogger } from "@sap-cloud-sdk/util";

@Controller('business-partner')
export class BusinessPartnerController {
	constructor(
		private readonly businessPartnerService: BusinessPartnerService,
	) {}

	private logger = createLogger("business-partner-api");

	@Get()
	async getBusinessPartners(@Headers() headers): Promise<object> {
		// retrieve X-MS-TOKEN-AAD-ACCESS-TOKEN token from request header
		const token = headers["x-ms-token-aad-access-token"];
		const businessPartners = await this.businessPartnerService
			.getAllBusinessPartners(token)
			.catch((error) => {
				throw this.createHttpException(
					"Failed to get business partners",
					error,
				);
			});
		this.logger.debug(
			`List of business partners: ${JSON.stringify(businessPartners)}`,
		);
		return businessPartners;
	}

	@Get('/:id')
	async getBusinessPartnerById(
		@Param('id') id: string,
		@Headers() headers,
	): Promise<BusinessPartner> {
		// retrieve X-MS-TOKEN-AAD-ACCESS-TOKEN token from request header
		const token = headers["x-ms-token-aad-access-token"];
		const businessPartner = await this.businessPartnerService
			.getBusinessPartnerById(id, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to get business partner by id ${id}`,
					error,
				);
			});
		this.logger.debug(
			`Business Partner response for id ${id}: ${JSON.stringify(
				businessPartner,
			)}`,
		);
		return businessPartner;
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
		const bPAddress = await this.businessPartnerService
			.createAddress(requestBody, id, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to create address for business partner ${id}`,
					error,
				);
			});
		this.logger.debug(
			`Created BP address response for id ${id}: ${JSON.stringify(bPAddress)}`,
		);
		return bPAddress;
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
		const bPAddress = await this.businessPartnerService
			.updateAddress(requestBody, businessPartnerId, addressId, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to update Business Partner ${businessPartnerId} address ${addressId}`,
					error,
				);
			});
		this.logger.debug(
			`Updated BP address response for BP ID ${businessPartnerId} and address iD ${addressId}: ${JSON.stringify(
				bPAddress,
			)}`,
		);
		return bPAddress;
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
		const bPAddress = await this.businessPartnerService
			.deleteAddress(businessPartnerId, addressId, token)
			.catch((error) => {
				throw this.createHttpException(
					`Failed to delete address ${addressId} for business partner ${businessPartnerId}`,
					error,
				);
			});
		this.logger.debug(
			`Deleted BP address response for BP ID ${businessPartnerId} and address iD ${addressId}: ${JSON.stringify(
				bPAddress,
			)}`,
		);
		return bPAddress;
	}

	/**
	 * Create HttpException from error
	 */
	private createHttpException(msg: string, error): HttpException {
		this.logger.error(`Message: ${msg} - Error: ${error}`);

		switch (error.constructor) {
			case ErrorWithCause:
				return this.handleErrorWithCause(msg, error);
			default:
				return this.handleGenericError(msg, error);
		}
	}

	/**
	 * Error from SAP Cloud SDK "ErrorWithCause"
	 */
	private handleErrorWithCause(msg: string, error): HttpException {
		let exceptionMessage = `${msg}`;
		let responseStatus = 500;

		if (error.cause?.response?.statusText){
			exceptionMessage += ` - ${error.cause.response.statusText}`;
		}

		if (process.env.DEBUG === "true" && error?.stack) {
			exceptionMessage += ` - ${error.stack}`;
		}

		if (error.cause?.response?.status) {
			responseStatus = error.cause.response.status;
		}

		return new HttpException(exceptionMessage, responseStatus, {
			cause: new Error(error.cause?.message || error.message),
		});
	}

	/**
	 * Generic error handling
	 */
	private handleGenericError(msg: string, error): HttpException {
		const statusCode = 500;
		let responseData = error.message || "Internal server error!";

		let exceptionMessage = `${msg} - ${responseData}`;

		if (process.env.DEBUG === "true" && error?.stack) {
			exceptionMessage += ` - ${error.stack}`;
		}

		return new HttpException(exceptionMessage, statusCode);
	}
}
