/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { CustomerApi } from './CustomerApi';
import { CustomerCompany, CustomerCompanyType } from './CustomerCompany';
import { CustomerSalesArea, CustomerSalesAreaType } from './CustomerSalesArea';
import {
  CustomerTaxGrouping,
  CustomerTaxGroupingType
} from './CustomerTaxGrouping';
import { CustomerText, CustomerTextType } from './CustomerText';
import {
  CustomerUnloadingPoint,
  CustomerUnloadingPointType
} from './CustomerUnloadingPoint';

/**
 * This class represents the entity "A_Customer" of service "API_BUSINESS_PARTNER".
 */
export class Customer<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerType<T>
{
  /**
   * Technical entity name for Customer.
   */
  static _entityName = 'A_Customer';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the Customer entity
   */
  static _keys = ['Customer'];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central billing block for customer.
   * Maximum length: 2.
   * @nullable
   */
  billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Person who Created the Object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date on which the Record Was Created.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Customer Account Group.
   * Maximum length: 4.
   * @nullable
   */
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Classification.
   * Maximum length: 2.
   * @nullable
   */
  customerClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Full Name.
   * Maximum length: 220.
   * @nullable
   */
  customerFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer.
   * Maximum length: 80.
   * @nullable
   */
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central delivery block for the customer.
   * Maximum length: 2.
   * @nullable
   */
  deliveryIsBlocked?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Natural Person.
   * Maximum length: 1.
   * @nullable
   */
  nfPartnerIsNaturalPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central order block for customer.
   * Maximum length: 2.
   * @nullable
   */
  orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central posting block.
   * @nullable
   */
  postingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group key.
   * Maximum length: 10.
   * @nullable
   */
  customerCorporateGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account number of the master record with the fiscal address.
   * Maximum length: 10.
   * @nullable
   */
  fiscalAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry key.
   * Maximum length: 4.
   * @nullable
   */
  industry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry code 1.
   * Maximum length: 10.
   * @nullable
   */
  industryCode1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry code 2.
   * Maximum length: 10.
   * @nullable
   */
  industryCode2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry code 3.
   * Maximum length: 10.
   * @nullable
   */
  industryCode3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry code 4.
   * Maximum length: 10.
   * @nullable
   */
  industryCode4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry code 5.
   * Maximum length: 10.
   * @nullable
   */
  industryCode5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * International location number  (part 1).
   * Maximum length: 7.
   * @nullable
   */
  internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nielsen ID.
   * Maximum length: 2.
   * @nullable
   */
  nielsenRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax type.
   * Maximum length: 2.
   * @nullable
   */
  responsibleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Number 1.
   * Maximum length: 16.
   * @nullable
   */
  taxNumber1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Number 2.
   * Maximum length: 11.
   * @nullable
   */
  taxNumber2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Number 3.
   * Maximum length: 18.
   * @nullable
   */
  taxNumber3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Number 4.
   * Maximum length: 18.
   * @nullable
   */
  taxNumber4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Number 5.
   * Maximum length: 60.
   * @nullable
   */
  taxNumber5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Number Type.
   * Maximum length: 2.
   * @nullable
   */
  taxNumberType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAT Registration Number.
   * Maximum length: 20.
   * @nullable
   */
  vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Deletion Flag for Master Record.
   * @nullable
   */
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Express train station.
   * Maximum length: 25.
   * @nullable
   */
  expressTrainStationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Train station.
   * Maximum length: 25.
   * @nullable
   */
  trainStationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Code.
   * Maximum length: 4.
   * @nullable
   */
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County Code.
   * Maximum length: 3.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustomerCompany} entity.
   */
  toCustomerCompany!: CustomerCompany<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerSalesArea} entity.
   */
  toCustomerSalesArea!: CustomerSalesArea<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerTaxGrouping} entity.
   */
  toCustomerTaxGrouping!: CustomerTaxGrouping<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerText} entity.
   */
  toCustomerText!: CustomerText<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerUnloadingPoint} entity.
   */
  toCustomerUnloadingPoint!: CustomerUnloadingPoint<T>[];

  constructor(readonly _entityApi: CustomerApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerType<T extends DeSerializers = DefaultDeSerializers> {
  customer: DeserializedType<T, 'Edm.String'>;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerClassification?: DeserializedType<T, 'Edm.String'> | null;
  customerFullName?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryIsBlocked?: DeserializedType<T, 'Edm.String'> | null;
  nfPartnerIsNaturalPerson?: DeserializedType<T, 'Edm.String'> | null;
  orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  postingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  customerCorporateGroup?: DeserializedType<T, 'Edm.String'> | null;
  fiscalAddress?: DeserializedType<T, 'Edm.String'> | null;
  industry?: DeserializedType<T, 'Edm.String'> | null;
  industryCode1?: DeserializedType<T, 'Edm.String'> | null;
  industryCode2?: DeserializedType<T, 'Edm.String'> | null;
  industryCode3?: DeserializedType<T, 'Edm.String'> | null;
  industryCode4?: DeserializedType<T, 'Edm.String'> | null;
  industryCode5?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
  nielsenRegion?: DeserializedType<T, 'Edm.String'> | null;
  responsibleType?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber1?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber2?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber3?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber4?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber5?: DeserializedType<T, 'Edm.String'> | null;
  taxNumberType?: DeserializedType<T, 'Edm.String'> | null;
  vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  expressTrainStationName?: DeserializedType<T, 'Edm.String'> | null;
  trainStationName?: DeserializedType<T, 'Edm.String'> | null;
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  toCustomerCompany: CustomerCompanyType<T>[];
  toCustomerSalesArea: CustomerSalesAreaType<T>[];
  toCustomerTaxGrouping: CustomerTaxGroupingType<T>[];
  toCustomerText: CustomerTextType<T>[];
  toCustomerUnloadingPoint: CustomerUnloadingPointType<T>[];
}
