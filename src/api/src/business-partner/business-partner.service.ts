import { Injectable } from '@nestjs/common';
import {
  businessPartnerService1,
  BusinessPartner,
  BusinessPartnerAddress
} from '../../services/business-partner-service-1';

const { businessPartnerApi, businessPartnerAddressApi  } = businessPartnerService1();

@Injectable()
export class BusinessPartnerService {

  /**
   * Gets a list of all business partners.
   * @returns List of business partner.
   */
  async getAllBusinessPartners(token: string): Promise<BusinessPartner[]> {
    var config;
          
    var req = businessPartnerApi
                .requestBuilder()
                .getAll()
                .select(
                  businessPartnerApi.schema.BUSINESS_PARTNER,
                  businessPartnerApi.schema.FIRST_NAME,
                  businessPartnerApi.schema.LAST_NAME,
                  businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(
                    businessPartnerAddressApi.schema.BUSINESS_PARTNER,
                    businessPartnerAddressApi.schema.ADDRESS_ID
                  )
                )
                .top(10)
                .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1'));
                //in case AAD token is available
    if(token){
      req.addCustomHeaders({ Authorization: 'Bearer ' + token });
      //in case AAD token is available
      config = {url: (process.env.ODATA_URL)};
    }else{
      //in case basic auth shall be used
      config = {url: (process.env.ODATA_URL),username: (process.env.ODATA_USERNAME),password: (process.env.ODATA_USERPWD)};
    }
    
    return await req.execute(config);
  }

  /**
   * Get a business partner by ID.
   * @param id - ID of the business partner to be returned.
   * @returns The business partner with the given ID.
   */
  async getBusinessPartnerById(id: string): Promise<BusinessPartner> {
    return await businessPartnerApi
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
          businessPartnerAddressApi.schema.HOUSE_NUMBER
        )
      )
      .execute({
        url: (process.env.ODATA_URL),
        username: (process.env.ODATA_USERNAME),
        password: (process.env.ODATA_USERPWD)
      });
  }

  /**
   * Creates an address for a business partner.
   * @param address - Address which is added to the business partner.
   * @param id - ID of the business partner.
   * @returns The address which was created.
   */
  async createAddress(
    address: Record<string, any>,
    id: string
  ): Promise<BusinessPartnerAddress> {
    const businessPartnerAddress = businessPartnerAddressApi
      .entityBuilder()
      .fromJson({ businessPartner: id, ...address });

    return await businessPartnerAddressApi
      .requestBuilder()
      .create(businessPartnerAddress)
      .execute({
        url: (process.env.ODATA_URL),
        username: (process.env.ODATA_USERNAME),
        password: (process.env.ODATA_USERPWD)
      });
  }

  /**
   * Updates an address of a business partner.
   * @param address - New address information after update. Existing values are overwritten, new ones are added.
   * @param businessPartner - ID of business partner whose address is updated.
   * @param addressId - ID of address which is updated.
   * @returns - The address after update.
   */
  updateAddress(
    address: Record<string, any>,
    businessPartner: string,
    addressId: string
  ): Promise<BusinessPartnerAddress> {
    const businessPartnerAddress = businessPartnerAddressApi
      .entityBuilder()
      .fromJson({ businessPartner, addressId, ...address });

    return businessPartnerAddressApi
      .requestBuilder()
      .update(businessPartnerAddress)
      .execute({
        url: (process.env.ODATA_URL),
        username: (process.env.ODATA_USERNAME),
        password: (process.env.ODATA_USERPWD)
      });
  }

  /**
   * Deletes an address of a business partner.
   * @param businessPartner - ID of the business partner to be updated.
   * @param addressId - ID of address to be deleted.
   * @returns - Void.
   */
  deleteAddress(businessPartner: string, addressId: string): Promise<void> {
    return businessPartnerAddressApi
      .requestBuilder()
      .delete(businessPartner, addressId)
      .execute({
        url: (process.env.ODATA_URL),
        username: (process.env.ODATA_USERNAME),
        password: (process.env.ODATA_USERPWD)
      });
  }
}