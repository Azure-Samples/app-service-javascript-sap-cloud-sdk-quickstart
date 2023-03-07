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
import type { CustomerCompanyApi } from './CustomerCompanyApi';
import {
  CustomerCompanyText,
  CustomerCompanyTextType
} from './CustomerCompanyText';
import { CustomerDunning, CustomerDunningType } from './CustomerDunning';
import {
  CustomerWithHoldingTax,
  CustomerWithHoldingTaxType
} from './CustomerWithHoldingTax';

/**
 * This class represents the entity "A_CustomerCompany" of service "API_BUSINESS_PARTNER".
 */
export class CustomerCompany<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerCompanyType<T>
{
  /**
   * Technical entity name for CustomerCompany.
   */
  static _entityName = 'A_CustomerCompany';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerCompany entity
   */
  static _keys = ['Customer', 'CompanyCode'];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Tolerance Group for Business Partner/G/L Account.
   * Maximum length: 4.
   * @nullable
   */
  aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Our account number at customer.
   * Maximum length: 12.
   * @nullable
   */
  accountByCustomer?: DeserializedType<T, 'Edm.String'> | null;
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
   * Internet address of partner company clerk.
   * Maximum length: 130.
   * @nullable
   */
  accountingClerkInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting clerk's telephone number at business partner.
   * Maximum length: 30.
   * @nullable
   */
  accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account number of an alternative payer.
   * Maximum length: 10.
   * @nullable
   */
  alternativePayerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collective Invoice Variant.
   * Maximum length: 1.
   * @nullable
   */
  collectiveInvoiceVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Memo.
   * Maximum length: 30.
   * @nullable
   */
  customerAccountNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Head Office Account Number (in branch accounts).
   * Maximum length: 10.
   * @nullable
   */
  customerHeadOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Clearing between customer and vendor ?.
   * @nullable
   */
  customerSupplierClearingIsUsed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Short Key for a House Bank.
   * Maximum length: 5.
   * @nullable
   */
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
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
   * Key for sorting according to assignment numbers.
   * Maximum length: 3.
   * @nullable
   */
  layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block Key for Payment.
   * Maximum length: 1.
   * @nullable
   */
  paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
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
   * Indicator: Send Payment Advices by EDI.
   * @nullable
   */
  paytAdviceIsSentbyEdi?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Posting block for company code.
   * @nullable
   */
  physicalInventoryBlockInd?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Reconciliation Account in General Ledger.
   * Maximum length: 10.
   * @nullable
   */
  reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Record Payment History ?.
   * @nullable
   */
  recordPaymentHistoryIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * User at customer.
   * Maximum length: 15.
   * @nullable
   */
  userAtCustomer?: DeserializedType<T, 'Edm.String'> | null;
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
   * Short Key for Known/Negotiated Leave.
   * Maximum length: 4.
   * @nullable
   */
  knownOrNegotiatedLeave?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Adjustment Key.
   * Maximum length: 2.
   * @nullable
   */
  valueAdjustmentKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Group.
   * Maximum length: 4.
   * @nullable
   */
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustomerCompanyText} entity.
   */
  toCompanyText!: CustomerCompanyText<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerDunning} entity.
   */
  toCustomerDunning!: CustomerDunning<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerWithHoldingTax} entity.
   */
  toWithHoldingTax!: CustomerWithHoldingTax<T>[];

  constructor(readonly _entityApi: CustomerCompanyApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerCompanyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerk?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerkFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerkInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  alternativePayerAccount?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  collectiveInvoiceVariant?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNote?: DeserializedType<T, 'Edm.String'> | null;
  customerHeadOffice?: DeserializedType<T, 'Edm.String'> | null;
  customerSupplierClearingIsUsed?: DeserializedType<T, 'Edm.Boolean'> | null;
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  interestCalculationCode?: DeserializedType<T, 'Edm.String'> | null;
  interestCalculationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  intrstCalcFrequencyInMonths?: DeserializedType<T, 'Edm.String'> | null;
  isToBeLocallyProcessed?: DeserializedType<T, 'Edm.Boolean'> | null;
  itemIsToBePaidSeparately?: DeserializedType<T, 'Edm.Boolean'> | null;
  layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
  paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  paymentMethodsList?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  paytAdviceIsSentbyEdi?: DeserializedType<T, 'Edm.Boolean'> | null;
  physicalInventoryBlockInd?: DeserializedType<T, 'Edm.Boolean'> | null;
  reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
  recordPaymentHistoryIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  userAtCustomer?: DeserializedType<T, 'Edm.String'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  cashPlanningGroup?: DeserializedType<T, 'Edm.String'> | null;
  knownOrNegotiatedLeave?: DeserializedType<T, 'Edm.String'> | null;
  valueAdjustmentKey?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  toCompanyText: CustomerCompanyTextType<T>[];
  toCustomerDunning: CustomerDunningType<T>[];
  toWithHoldingTax: CustomerWithHoldingTaxType<T>[];
}
