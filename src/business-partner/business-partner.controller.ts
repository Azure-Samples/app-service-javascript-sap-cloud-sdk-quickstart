import {
  Controller, Body, Get, HttpException, Param, Delete, HttpCode, Post, Put
} from '@nestjs/common';
import { BusinessPartner, BusinessPartnerAddress } from '../../services/business-partner-service-1';
import { BusinessPartnerService } from './business-partner.service';

@Controller('business-partner')
export class BusinessPartnerController {
  constructor(private businessPartnerService: BusinessPartnerService) {}

  @Get()
  async getBusinessPartners(): Promise<BusinessPartner[]> {
    return await this.businessPartnerService
      .getAllBusinessPartners()
      .catch(error => {
        throw new HttpException(
          `Failed to get business partners - ${error.message}`,
          500
        );
      });
  }

  @Get('/:id')
  async getBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {
      return await this.businessPartnerService
        .getBusinessPartnerById(id)
        .catch(error => {
          throw new HttpException(
            `Failed to get business partner ${id} - ${error.message}`,
            500
          );
        });
  }

  @Post('/:id/address')
  @HttpCode(201)
  async createAddress(
    @Body() requestBody: Record<string, any>,
    @Param('id') id: string
  ): Promise<BusinessPartnerAddress> {
    return await this.businessPartnerService
    .createAddress(requestBody, id)
    .catch(error => {
      throw new HttpException(
        `Failed to create address for business partner ${id} - ${error.message}`,
        500
      );
    });
  }
  
  @Put('/:businessPartnerId/address/:addressId')
  async updateBusinessPartnerAddress(
    @Body() requestBody: Record<string, any>,
    @Param('businessPartnerId') businessPartnerId: string,
    @Param('addressId') addressId: string
  ): Promise<BusinessPartnerAddress> {
    return await this.businessPartnerService
    .updateAddress(
      requestBody,
      businessPartnerId,
      addressId
    )
    .catch(error => {
      throw new HttpException(
        `Failed to update business partner ${businessPartnerId} - ${error.message}`,
        500
      );
    });
  }

  @Delete('/:businessPartnerId/address/:addressId')
  @HttpCode(204)
  async deleteBusinessPartnerAddress(
    @Param('businessPartnerId') businessPartnerId: string,
    @Param('addressId') addressId: string
  ): Promise<void> {
    return await this.businessPartnerService
    .deleteAddress(
      businessPartnerId,
      addressId
    )
    .catch(error => {
      throw new HttpException(
        `Failed to delete business partner ${businessPartnerId} - ${error.message}`,
        500
      );
    });
  }

}