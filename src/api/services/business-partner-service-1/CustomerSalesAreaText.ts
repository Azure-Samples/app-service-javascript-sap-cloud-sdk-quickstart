/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { CustomerSalesAreaTextApi } from './CustomerSalesAreaTextApi';

/**
 * This class represents the entity "A_CustomerSalesAreaText" of service "API_BUSINESS_PARTNER".
 */
export class CustomerSalesAreaText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerSalesAreaTextType<T>
{
  /**
   * Technical entity name for CustomerSalesAreaText.
   */
  static _entityName = 'A_CustomerSalesAreaText';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerSalesAreaText entity
   */
  static _keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'Language',
    'LongTextID'
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
   * Distribution Channel.
   * Maximum length: 2.
   */
  distributionChannel!: DeserializedType<T, 'Edm.String'>;
  /**
   * Division.
   * Maximum length: 2.
   */
  division!: DeserializedType<T, 'Edm.String'>;
  /**
   * Language key.
   * Maximum length: 2.
   */
  language!: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  longTextId!: DeserializedType<T, 'Edm.String'>;
  /**
   * String.
   * @nullable
   */
  longText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustomerSalesAreaTextApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerSalesAreaTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  salesOrganization: DeserializedType<T, 'Edm.String'>;
  distributionChannel: DeserializedType<T, 'Edm.String'>;
  division: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longTextId: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
