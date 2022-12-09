"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompanyApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SupplierCompany_1 = require("./SupplierCompany");
const SupplierCompanyRequestBuilder_1 = require("./SupplierCompanyRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierCompanyApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierCompany_1.SupplierCompany;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_COMPANY_TEXT: new odata_v2_1.Link('to_CompanyText', this, linkedApis[0]),
            TO_SUPPLIER: new odata_v2_1.OneToOneLink('to_Supplier', this, linkedApis[1]),
            TO_SUPPLIER_DUNNING: new odata_v2_1.Link('to_SupplierDunning', this, linkedApis[2]),
            TO_SUPPLIER_WITH_HOLDING_TAX: new odata_v2_1.Link('to_SupplierWithHoldingTax', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierCompanyRequestBuilder_1.SupplierCompanyRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierCompany_1.SupplierCompany, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link supplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCodeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField('CompanyCodeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentBlockingReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_BLOCKING_REASON: fieldBuilder.buildEdmTypeField('PaymentBlockingReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierIsBlockedForPosting} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_IS_BLOCKED_FOR_POSTING: fieldBuilder.buildEdmTypeField('SupplierIsBlockedForPosting', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link accountingClerk} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_CLERK: fieldBuilder.buildEdmTypeField('AccountingClerk', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingClerkFaxNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_CLERK_FAX_NUMBER: fieldBuilder.buildEdmTypeField('AccountingClerkFaxNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingClerkPhoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_CLERK_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('AccountingClerkPhoneNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierClerk} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_CLERK: fieldBuilder.buildEdmTypeField('SupplierClerk', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierClerkUrl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_CLERK_URL: fieldBuilder.buildEdmTypeField('SupplierClerkURL', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentMethodsList} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_METHODS_LIST: fieldBuilder.buildEdmTypeField('PaymentMethodsList', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link clearCustomerSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CLEAR_CUSTOMER_SUPPLIER: fieldBuilder.buildEdmTypeField('ClearCustomerSupplier', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isToBeLocallyProcessed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_TO_BE_LOCALLY_PROCESSED: fieldBuilder.buildEdmTypeField('IsToBeLocallyProcessed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link itemIsToBePaidSeparately} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_IS_TO_BE_PAID_SEPARATELY: fieldBuilder.buildEdmTypeField('ItemIsToBePaidSeparately', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link paymentIsToBeSentByEdi} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_IS_TO_BE_SENT_BY_EDI: fieldBuilder.buildEdmTypeField('PaymentIsToBeSentByEDI', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link houseBank} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK: fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true),
                /**
                 * Static representation of the {@link checkPaidDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHECK_PAID_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('CheckPaidDurationInDays', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfExchLmtAmtInCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_EXCH_LMT_AMT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('BillOfExchLmtAmtInCoCodeCrcy', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link supplierClerkIdBySupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_CLERK_ID_BY_SUPPLIER: fieldBuilder.buildEdmTypeField('SupplierClerkIDBySupplier', 'Edm.String', true),
                /**
                 * Static representation of the {@link reconciliationAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECONCILIATION_ACCOUNT: fieldBuilder.buildEdmTypeField('ReconciliationAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link interestCalculationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTEREST_CALCULATION_CODE: fieldBuilder.buildEdmTypeField('InterestCalculationCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link interestCalculationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTEREST_CALCULATION_DATE: fieldBuilder.buildEdmTypeField('InterestCalculationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link intrstCalcFrequencyInMonths} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTRST_CALC_FREQUENCY_IN_MONTHS: fieldBuilder.buildEdmTypeField('IntrstCalcFrequencyInMonths', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierHeadOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_HEAD_OFFICE: fieldBuilder.buildEdmTypeField('SupplierHeadOffice', 'Edm.String', true),
                /**
                 * Static representation of the {@link alternativePayee} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATIVE_PAYEE: fieldBuilder.buildEdmTypeField('AlternativePayee', 'Edm.String', true),
                /**
                 * Static representation of the {@link layoutSortingRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAYOUT_SORTING_RULE: fieldBuilder.buildEdmTypeField('LayoutSortingRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link aparToleranceGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APAR_TOLERANCE_GROUP: fieldBuilder.buildEdmTypeField('APARToleranceGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierCertificationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_CERTIFICATION_DATE: fieldBuilder.buildEdmTypeField('SupplierCertificationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link supplierAccountNote} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ACCOUNT_NOTE: fieldBuilder.buildEdmTypeField('SupplierAccountNote', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_COUNTRY: fieldBuilder.buildEdmTypeField('WithholdingTaxCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link deletionIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link cashPlanningGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CASH_PLANNING_GROUP: fieldBuilder.buildEdmTypeField('CashPlanningGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link isToBeCheckedForDuplicates} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_TO_BE_CHECKED_FOR_DUPLICATES: fieldBuilder.buildEdmTypeField('IsToBeCheckedForDuplicates', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link minorityGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINORITY_GROUP: fieldBuilder.buildEdmTypeField('MinorityGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierAccountGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierCompany_1.SupplierCompany)
            };
        }
        return this._schema;
    }
}
exports.SupplierCompanyApi = SupplierCompanyApi;
//# sourceMappingURL=SupplierCompanyApi.js.map