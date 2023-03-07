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
import type { SupplierApi } from './SupplierApi';
import { SupplierCompany, SupplierCompanyType } from './SupplierCompany';
import {
  SupplierPurchasingOrg,
  SupplierPurchasingOrgType
} from './SupplierPurchasingOrg';
import { SupplierText, SupplierTextType } from './SupplierText';

/**
 * This class represents the entity "A_Supplier" of service "API_BUSINESS_PARTNER".
 */
export class Supplier<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SupplierType<T>
{
  /**
   * Technical entity name for Supplier.
   */
  static _entityName = 'A_Supplier';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the Supplier entity
   */
  static _keys = ['Supplier'];
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Number of the Alternative Payee.
   * Maximum length: 10.
   * @nullable
   */
  alternativePayeeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Block.
   * @nullable
   */
  paymentIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Central posting block.
   * @nullable
   */
  postingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Centrally imposed purchasing block.
   * @nullable
   */
  purchasingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Vendor account group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Full Name.
   * Maximum length: 220.
   * @nullable
   */
  supplierFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Supplier.
   * Maximum length: 80.
   * @nullable
   */
  supplierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAT Registration Number.
   * Maximum length: 20.
   * @nullable
   */
  vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Birth of the Person Subject to Withholding Tax.
   * @nullable
   */
  birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Cocatenated International Location Number.
   * Maximum length: 20.
   * @nullable
   */
  concatenatedInternationalLocNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Deletion Flag for Master Record.
   * @nullable
   */
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Account number of the master record with fiscal address.
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
   * International location number  (part 1).
   * Maximum length: 7.
   * @nullable
   */
  internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * International location number (Part 2).
   * Maximum length: 5.
   * @nullable
   */
  internationalLocationNumber2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check digit for the international location number.
   * Maximum length: 1.
   * @nullable
   */
  internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Natural Person.
   * Maximum length: 1.
   * @nullable
   */
  isNaturalPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax type.
   * Maximum length: 2.
   * @nullable
   */
  responsibleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validity Date of Certification.
   * @nullable
   */
  suplrQltyInProcmtCertfnValidTo?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Supplier's QM System.
   * Maximum length: 4.
   * @nullable
   */
  suplrQualityManagementSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group key.
   * Maximum length: 10.
   * @nullable
   */
  supplierCorporateGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Function That Will Be Blocked.
   * Maximum length: 2.
   * @nullable
   */
  supplierProcurementBlock?: DeserializedType<T, 'Edm.String'> | null;
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
   * Tax Number at Responsible Tax Authority.
   * Maximum length: 18.
   * @nullable
   */
  taxNumberResponsible?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Number Type.
   * Maximum length: 2.
   * @nullable
   */
  taxNumberType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier indicator relevant for proof of delivery.
   * Maximum length: 1.
   * @nullable
   */
  suplrProofOfDelivRlvtCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Split.
   * @nullable
   */
  brTaxIsSplit?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-many navigation property to the {@link SupplierCompany} entity.
   */
  toSupplierCompany!: SupplierCompany<T>[];
  /**
   * One-to-many navigation property to the {@link SupplierPurchasingOrg} entity.
   */
  toSupplierPurchasingOrg!: SupplierPurchasingOrg<T>[];
  /**
   * One-to-many navigation property to the {@link SupplierText} entity.
   */
  toSupplierText!: SupplierText<T>[];

  constructor(readonly _entityApi: SupplierApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierType<T extends DeSerializers = DefaultDeSerializers> {
  supplier: DeserializedType<T, 'Edm.String'>;
  alternativePayeeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  paymentIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  postingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  purchasingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  supplierFullName?: DeserializedType<T, 'Edm.String'> | null;
  supplierName?: DeserializedType<T, 'Edm.String'> | null;
  vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  concatenatedInternationalLocNo?: DeserializedType<T, 'Edm.String'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  fiscalAddress?: DeserializedType<T, 'Edm.String'> | null;
  industry?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber2?: DeserializedType<T, 'Edm.String'> | null;
  internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
  isNaturalPerson?: DeserializedType<T, 'Edm.String'> | null;
  responsibleType?: DeserializedType<T, 'Edm.String'> | null;
  suplrQltyInProcmtCertfnValidTo?: DeserializedType<T, 'Edm.DateTime'> | null;
  suplrQualityManagementSystem?: DeserializedType<T, 'Edm.String'> | null;
  supplierCorporateGroup?: DeserializedType<T, 'Edm.String'> | null;
  supplierProcurementBlock?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber1?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber2?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber3?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber4?: DeserializedType<T, 'Edm.String'> | null;
  taxNumber5?: DeserializedType<T, 'Edm.String'> | null;
  taxNumberResponsible?: DeserializedType<T, 'Edm.String'> | null;
  taxNumberType?: DeserializedType<T, 'Edm.String'> | null;
  suplrProofOfDelivRlvtCode?: DeserializedType<T, 'Edm.String'> | null;
  brTaxIsSplit?: DeserializedType<T, 'Edm.Boolean'> | null;
  toSupplierCompany: SupplierCompanyType<T>[];
  toSupplierPurchasingOrg: SupplierPurchasingOrgType<T>[];
  toSupplierText: SupplierTextType<T>[];
}
