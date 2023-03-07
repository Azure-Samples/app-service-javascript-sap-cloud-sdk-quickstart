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
import type { SupplierCompanyApi } from './SupplierCompanyApi';
import {
  SupplierCompanyText,
  SupplierCompanyTextType
} from './SupplierCompanyText';
import { Supplier, SupplierType } from './Supplier';
import { SupplierDunning, SupplierDunningType } from './SupplierDunning';
import {
  SupplierWithHoldingTax,
  SupplierWithHoldingTaxType
} from './SupplierWithHoldingTax';

/**
 * This class represents the entity "A_SupplierCompany" of service "API_BUSINESS_PARTNER".
 */
export class SupplierCompany<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SupplierCompanyType<T>
{
  /**
   * Technical entity name for SupplierCompany.
   */
  static _entityName = 'A_SupplierCompany';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the SupplierCompany entity
   */
  static _keys = ['Supplier', 'CompanyCode'];
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
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Company Code or Company.
   * Maximum length: 25.
   * @nullable
   */
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Key for Payment.
   * Maximum length: 1.
   * @nullable
   */
  paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting block for company code.
   * @nullable
   */
  supplierIsBlockedForPosting?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Accounting Clerk Abbreviation.
   * Maximum length: 2.
   * @nullable
   */
  accountingClerk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting clerk's fax number at the customer/vendor.
   * Maximum length: 31.
   * @nullable
   */
  accountingClerkFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting clerk's telephone number at business partner.
   * Maximum length: 30.
   * @nullable
   */
  accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clerk at vendor.
   * Maximum length: 15.
   * @nullable
   */
  supplierClerk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet address of partner company clerk.
   * Maximum length: 130.
   * @nullable
   */
  supplierClerkUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List of Respected Payment Methods.
   * Maximum length: 10.
   * @nullable
   */
  paymentMethodsList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Terms of payment key.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Clearing between customer and vendor?.
   * @nullable
   */
  clearCustomerSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Local Processing?.
   * @nullable
   */
  isToBeLocallyProcessed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Pay All Items Separately?.
   * @nullable
   */
  itemIsToBePaidSeparately?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Send Payment Advices by EDI.
   * @nullable
   */
  paymentIsToBeSentByEdi?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Short Key for a House Bank.
   * Maximum length: 5.
   * @nullable
   */
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Probable Time Until Check Is Paid.
   * @nullable
   */
  checkPaidDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill of Exchange Limit (in Local Currency).
   * @nullable
   */
  billOfExchLmtAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Our account number with the vendor.
   * Maximum length: 12.
   * @nullable
   */
  supplierClerkIdBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconciliation Account in General Ledger.
   * Maximum length: 10.
   * @nullable
   */
  reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interest Indicator.
   * Maximum length: 2.
   * @nullable
   */
  interestCalculationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Date of Last Interest Calculation.
   * @nullable
   */
  interestCalculationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Interest Calculation Frequency in Months.
   * Maximum length: 2.
   * @nullable
   */
  intrstCalcFrequencyInMonths?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Head office account number.
   * Maximum length: 10.
   * @nullable
   */
  supplierHeadOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account number of the alternative payee.
   * Maximum length: 10.
   * @nullable
   */
  alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key for sorting according to assignment numbers.
   * Maximum length: 3.
   * @nullable
   */
  layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tolerance Group for Business Partner/G/L Account.
   * Maximum length: 4.
   * @nullable
   */
  aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certification Date.
   * @nullable
   */
  supplierCertificationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Memo.
   * Maximum length: 30.
   * @nullable
   */
  supplierAccountNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  withholdingTaxCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deletion Flag for Master Record (Company Code Level).
   * @nullable
   */
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Planning Group.
   * Maximum length: 10.
   * @nullable
   */
  cashPlanningGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Flag for Double Invoices or Credit Memos.
   * @nullable
   */
  isToBeCheckedForDuplicates?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Minority Indicator.
   * Maximum length: 3.
   * @nullable
   */
  minorityGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor account group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SupplierCompanyText} entity.
   */
  toCompanyText!: SupplierCompanyText<T>[];
  /**
   * One-to-one navigation property to the {@link Supplier} entity.
   */
  toSupplier?: Supplier<T> | null;
  /**
   * One-to-many navigation property to the {@link SupplierDunning} entity.
   */
  toSupplierDunning!: SupplierDunning<T>[];
  /**
   * One-to-many navigation property to the {@link SupplierWithHoldingTax} entity.
   */
  toSupplierWithHoldingTax!: SupplierWithHoldingTax<T>[];

  constructor(readonly _entityApi: SupplierCompanyApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierCompanyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplier: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  supplierIsBlockedForPosting?: DeserializedType<T, 'Edm.Boolean'> | null;
  accountingClerk?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerkFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  supplierClerk?: DeserializedType<T, 'Edm.String'> | null;
  supplierClerkUrl?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethodsList?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  clearCustomerSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  isToBeLocallyProcessed?: DeserializedType<T, 'Edm.Boolean'> | null;
  itemIsToBePaidSeparately?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentIsToBeSentByEdi?: DeserializedType<T, 'Edm.Boolean'> | null;
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  checkPaidDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  billOfExchLmtAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  supplierClerkIdBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
  interestCalculationCode?: DeserializedType<T, 'Edm.String'> | null;
  interestCalculationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  intrstCalcFrequencyInMonths?: DeserializedType<T, 'Edm.String'> | null;
  supplierHeadOffice?: DeserializedType<T, 'Edm.String'> | null;
  alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
  layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
  aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
  supplierCertificationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  supplierAccountNote?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCountry?: DeserializedType<T, 'Edm.String'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  cashPlanningGroup?: DeserializedType<T, 'Edm.String'> | null;
  isToBeCheckedForDuplicates?: DeserializedType<T, 'Edm.Boolean'> | null;
  minorityGroup?: DeserializedType<T, 'Edm.String'> | null;
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  toCompanyText: SupplierCompanyTextType<T>[];
  toSupplier?: SupplierType<T> | null;
  toSupplierDunning: SupplierDunningType<T>[];
  toSupplierWithHoldingTax: SupplierWithHoldingTaxType<T>[];
}
