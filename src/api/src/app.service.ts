import { Injectable } from '@nestjs/common'
import { executeHttpRequestWithOrigin } from '@sap-cloud-sdk/http-client';

@Injectable()
export class AppService {

  async getHello (): Promise<object> {
    return { title: 'SAP Cloud SDK on Azure', message: 'Hello Azure! Greetings from the' }
  }

    /**
   * Check service availability using the SAP Cloud SDK http client using HEAD. Typed client doesn't support HEAD.
   * See discussion with SAP here: https://github.com/SAP/cloud-sdk-js/issues/3371
   * 
   * https://sap.github.io/cloud-sdk/api/v2/functions/sap_cloud_sdk_http_client.executeHttpRequest.html
   */
    async checkServiceAvailability (): Promise<object> {
      const response = await executeHttpRequestWithOrigin(
        {
          url: process.env.ODATA_URL + '/sap/opu/odata/sap/API_BUSINESS_PARTNER'
        },
        {
          method: 'head',
          headers: {
            custom: { apiKey: process.env.APIKEY }
          }
        },
        {
          fetchCsrfToken: false
        }
      );
      return {code: response.status, message: response.statusText};
    }
}
