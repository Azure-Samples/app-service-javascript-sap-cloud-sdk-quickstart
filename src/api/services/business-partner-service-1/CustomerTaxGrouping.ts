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
import type { CustomerTaxGroupingApi } from './CustomerTaxGroupingApi';

/**
 * This class represents the entity "A_CustomerTaxGrouping" of service "API_BUSINESS_PARTNER".
 */
export class CustomerTaxGrouping<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerTaxGroupingType<T>
{
  /**
   * Technical entity name for CustomerTaxGrouping.
   */
  static _entityName = 'A_CustomerTaxGrouping';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerTaxGrouping entity
   */
  static _keys = ['Customer', 'CustomerTaxGroupingCode'];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Indicator for Tax Codes.
   * Maximum length: 3.
   */
  customerTaxGroupingCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Number of exemption certificate.
   * Maximum length: 15.
   * @nullable
   */
  custTaxGrpExemptionCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption rate.
   * @nullable
   */
  custTaxGroupExemptionRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Start date of exemption.
   * @nullable
   */
  custTaxGroupExemptionStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End date of exemption.
   * @nullable
   */
  custTaxGroupExemptionEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Subjected from.
   * @nullable
   */
  custTaxGroupSubjectedStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Subjected until.
   * @nullable
   */
  custTaxGroupSubjectedEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(readonly _entityApi: CustomerTaxGroupingApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerTaxGroupingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  customerTaxGroupingCode: DeserializedType<T, 'Edm.String'>;
  custTaxGrpExemptionCertificate?: DeserializedType<T, 'Edm.String'> | null;
  custTaxGroupExemptionRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  custTaxGroupExemptionStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  custTaxGroupExemptionEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  custTaxGroupSubjectedStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  custTaxGroupSubjectedEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
