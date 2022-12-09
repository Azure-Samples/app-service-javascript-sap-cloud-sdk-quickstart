import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  businessPartnerService1,
  BusinessPartner
} from '../../services/business-partner-service-1';

@Injectable()
export class BusinessPartnerService {

  constructor(private configService: ConfigService) {}

  async getAllBusinessPartners(): Promise<BusinessPartner[]> {
    const { businessPartnerApi } = businessPartnerService1();
    return await businessPartnerApi
        .requestBuilder()
        .getAll()
        //.addCustomHeaders({ APIKey: '<YOUR-API-KEY>' })
        .execute({
          url: (process.env.ODATA_URL || this.configService.get<string>('URL')),//MOCKURL
          username: (process.env.ODATA_USERNAME || this.configService.get<string>('ODATA_USERNAME')),
          password: (process.env.ODATA_USERPWD || this.configService.get<string>('ODATA_USERPWD'))
        });
  }
}