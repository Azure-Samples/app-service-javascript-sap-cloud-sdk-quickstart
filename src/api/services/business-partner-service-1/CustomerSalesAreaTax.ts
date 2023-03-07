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
import type { CustomerSalesAreaTaxApi } from './CustomerSalesAreaTaxApi';

/**
 * This class represents the entity "A_CustomerSalesAreaTax" of service "API_BUSINESS_PARTNER".
 */
export class CustomerSalesAreaTax<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerSalesAreaTaxType<T>
{
  /**
   * Technical entity name for CustomerSalesAreaTax.
   */
  static _entityName = 'A_CustomerSalesAreaTax';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerSalesAreaTax entity
   */
  static _keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'DepartureCountry',
    'CustomerTaxCategory'
  ];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  salesOrganization!: DeserializedType<T, 'Edm.String'>;
  /**
   * Reference distrib.channel for cust.and material masters.
   * Maximum length: 2.
   */
  distributionChannel!: DeserializedType<T, 'Edm.String'>;
  /**
   * Division.
   * Maximum length: 2.
   */
  division!: DeserializedType<T, 'Edm.String'>;
  /**
   * Departure Country/Region (from which the goods are sent).
   * Maximum length: 3.
   */
  departureCountry!: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax category (sales tax, federal sales tax,...).
   * Maximum length: 4.
   */
  customerTaxCategory!: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax classification for customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustomerSalesAreaTaxApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerSalesAreaTaxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  salesOrganization: DeserializedType<T, 'Edm.String'>;
  distributionChannel: DeserializedType<T, 'Edm.String'>;
  division: DeserializedType<T, 'Edm.String'>;
  departureCountry: DeserializedType<T, 'Edm.String'>;
  customerTaxCategory: DeserializedType<T, 'Edm.String'>;
  customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
}
