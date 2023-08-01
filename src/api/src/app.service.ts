import { Injectable } from "@nestjs/common";
import {
	executeHttpRequestWithOrigin,
	HttpResponse,
} from "@sap-cloud-sdk/http-client";
import { createLogger } from "@sap-cloud-sdk/util";

@Injectable()
export class AppService {
	async getHello(): Promise<object> {
		return {
			title: "Hello World",
			message: "Greetings from the SAP Cloud SDK on Azure Functions",
		};
	}

	/**
	 * Check service availability using the SAP Cloud SDK http client using HEAD. Typed client doesn't support HEAD.
	 * See discussion with SAP here: https://github.com/SAP/cloud-sdk-js/issues/3371
	 *
	 * https://sap.github.io/cloud-sdk/api/v2/functions/sap_cloud_sdk_http_client.executeHttpRequest.html
	 */
	async checkServiceAvailability(): Promise<object> {
		const logger = createLogger("health");

		var response: HttpResponse;
		var result: object;
		var authHeader = { [process.env.APIKEY_HEADERNAME]: process.env.APIKEY };

		//if odata username and password are set, add basic auth header
		if(process.env.ODATA_USERNAME && process.env.ODATA_USERPWD){
			authHeader = {
				...authHeader,
				Authorization: `Basic ${Buffer.from(
					`${process.env.ODATA_USERNAME}:${process.env.ODATA_USERPWD}`,
				).toString("base64")}`
			};
		}

		try {
			response = await executeHttpRequestWithOrigin(
				{
					url: `${process.env.ODATA_URL}/sap/opu/odata/sap/API_BUSINESS_PARTNER`,
				},
				{
					method: "head",
					headers: {
						custom: authHeader,
					},
				},
				{
					fetchCsrfToken: false,
				},
			);
			logger.debug(response);

			result = { code: response.status, statusText: response.statusText };
		} catch (err) {
			logger.error(err);

			result = {
				status: err.response?.status
					? err.response?.status
					: "No Status available",
				statusText: err.response?.statusText
					? err.response?.statusText
					: "No Status Text available",
				message: err.message,
				cause: err.cause?.message ? err.cause?.message : "No Cause identified",
				rootCause: err.rootCause?.message
					? err.rootCause?.message
					: "No Root Cause identified",
				responseBody: err.rootCause?.response?.data
					? err.rootCause?.response?.data
					: "No Response Body available",
			};
		}

		return result;
	}
}
