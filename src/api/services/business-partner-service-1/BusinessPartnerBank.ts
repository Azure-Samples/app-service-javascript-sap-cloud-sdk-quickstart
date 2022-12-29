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
import type { BusinessPartnerBankApi } from './BusinessPartnerBankApi';

/**
 * This class represents the entity "A_BusinessPartnerBank" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerBank<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessPartnerBankType<T>
{
  /**
   * Technical entity name for BusinessPartnerBank.
   */
  static _entityName = 'A_BusinessPartnerBank';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the BusinessPartnerBank entity
   */
  static _keys = ['BusinessPartner', 'BankIdentification'];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Details ID.
   * Maximum length: 4.
   */
  bankIdentification!: DeserializedType<T, 'Edm.String'>;
  /**
   * Country/Region Key of Bank.
   * Maximum length: 3.
   * @nullable
   */
  bankCountryKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Financial Institution.
   * Maximum length: 60.
   * @nullable
   */
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Key.
   * Maximum length: 15.
   * @nullable
   */
  bankNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SWIFT/BIC for International Payments.
   * Maximum length: 11.
   * @nullable
   */
  swiftCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Control Key.
   * Maximum length: 2.
   * @nullable
   */
  bankControlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Holder Name.
   * Maximum length: 60.
   * @nullable
   */
  bankAccountHolderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Bank Account.
   * Maximum length: 40.
   * @nullable
   */
  bankAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validity Start of Business Partner Bank Details.
   * @nullable
   */
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity End of Business Partner Bank Details.
   * @nullable
   */
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * IBAN (International Bank Account Number).
   * Maximum length: 34.
   * @nullable
   */
  iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validity Start of IBAN.
   * @nullable
   */
  ibanValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Bank Account Number.
   * Maximum length: 18.
   * @nullable
   */
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Details for Bank Details.
   * Maximum length: 20.
   * @nullable
   */
  bankAccountReferenceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Collection Authorization.
   * @nullable
   */
  collectionAuthInd?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * City.
   * Maximum length: 35.
   * @nullable
   */
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BusinessPartnerBankApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnerBankType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  bankIdentification: DeserializedType<T, 'Edm.String'>;
  bankCountryKey?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  bankNumber?: DeserializedType<T, 'Edm.String'> | null;
  swiftCode?: DeserializedType<T, 'Edm.String'> | null;
  bankControlKey?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountHolderName?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountName?: DeserializedType<T, 'Edm.String'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  ibanValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountReferenceText?: DeserializedType<T, 'Edm.String'> | null;
  collectionAuthInd?: DeserializedType<T, 'Edm.Boolean'> | null;
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
