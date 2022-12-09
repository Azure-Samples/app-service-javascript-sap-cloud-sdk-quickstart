"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerBankApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessPartnerBank_1 = require("./BusinessPartnerBank");
const BusinessPartnerBankRequestBuilder_1 = require("./BusinessPartnerBankRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerBankApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerBank_1.BusinessPartnerBank;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerBankRequestBuilder_1.BusinessPartnerBankRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerBank_1.BusinessPartnerBank, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link businessPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                /**
                 * Static representation of the {@link bankIdentification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_IDENTIFICATION: fieldBuilder.buildEdmTypeField('BankIdentification', 'Edm.String', false),
                /**
                 * Static representation of the {@link bankCountryKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_COUNTRY_KEY: fieldBuilder.buildEdmTypeField('BankCountryKey', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_NAME: fieldBuilder.buildEdmTypeField('BankName', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_NUMBER: fieldBuilder.buildEdmTypeField('BankNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link swiftCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SWIFT_CODE: fieldBuilder.buildEdmTypeField('SWIFTCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankControlKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_CONTROL_KEY: fieldBuilder.buildEdmTypeField('BankControlKey', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccountHolderName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_HOLDER_NAME: fieldBuilder.buildEdmTypeField('BankAccountHolderName', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccountName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField('BankAccountName', 'Edm.String', true),
                /**
                 * Static representation of the {@link validityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link iban} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
                /**
                 * Static representation of the {@link ibanValidityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IBAN_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('IBANValidityStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link bankAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT: fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccountReferenceText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_REFERENCE_TEXT: fieldBuilder.buildEdmTypeField('BankAccountReferenceText', 'Edm.String', true),
                /**
                 * Static representation of the {@link collectionAuthInd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COLLECTION_AUTH_IND: fieldBuilder.buildEdmTypeField('CollectionAuthInd', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link cityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerBank_1.BusinessPartnerBank)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerBankApi = BusinessPartnerBankApi;
//# sourceMappingURL=BusinessPartnerBankApi.js.map