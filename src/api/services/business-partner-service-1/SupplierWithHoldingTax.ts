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
import type { SupplierWithHoldingTaxApi } from './SupplierWithHoldingTaxApi';

/**
 * This class represents the entity "A_SupplierWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export class SupplierWithHoldingTax<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SupplierWithHoldingTaxType<T>
{
  /**
   * Technical entity name for SupplierWithHoldingTax.
   */
  static _entityName = 'A_SupplierWithHoldingTax';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the SupplierWithHoldingTax entity
   */
  static _keys = ['Supplier', 'CompanyCode', 'WithholdingTaxType'];
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Indicator for Withholding Tax Type.
   * Maximum length: 2.
   */
  withholdingTaxType!: DeserializedType<T, 'Edm.String'>;
  /**
   * Date on Which Exemption Begins.
   * @nullable
   */
  exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date on Which Exemption Ends.
   * @nullable
   */
  exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Reason for Exemption.
   * Maximum length: 2.
   * @nullable
   */
  exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Subject to Withholding Tax?.
   * @nullable
   */
  isWithholdingTaxSubject?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Type of Recipient.
   * Maximum length: 2.
   * @nullable
   */
  recipientType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption Certificate Number.
   * Maximum length: 25.
   * @nullable
   */
  withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption Rate.
   * @nullable
   */
  withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Withholding tax identification number.
   * Maximum length: 16.
   * @nullable
   */
  withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: SupplierWithHoldingTaxApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierWithHoldingTaxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplier: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  withholdingTaxType: DeserializedType<T, 'Edm.String'>;
  exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
  exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  isWithholdingTaxSubject?: DeserializedType<T, 'Edm.Boolean'> | null;
  recipientType?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
