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
        url: this.configService.get<string>('URL'),//MOCKURL
        username: this.configService.get<string>('ODATAUSERNAME'),
        password: this.configService.get<string>('ODATAUSERPWD')
    });
  }
}