"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWithHoldingTaxApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustomerWithHoldingTax_1 = require("./CustomerWithHoldingTax");
const CustomerWithHoldingTaxRequestBuilder_1 = require("./CustomerWithHoldingTaxRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerWithHoldingTaxApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerWithHoldingTax_1.CustomerWithHoldingTax;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustomerWithHoldingTaxRequestBuilder_1.CustomerWithHoldingTaxRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerWithHoldingTax_1.CustomerWithHoldingTax, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link customer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link withholdingTaxType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_TYPE: fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', false),
                /**
                 * Static representation of the {@link withholdingTaxCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxAgent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_AGENT: fieldBuilder.buildEdmTypeField('WithholdingTaxAgent', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link obligationDateBegin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OBLIGATION_DATE_BEGIN: fieldBuilder.buildEdmTypeField('ObligationDateBegin', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link obligationDateEnd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OBLIGATION_DATE_END: fieldBuilder.buildEdmTypeField('ObligationDateEnd', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link withholdingTaxNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_NUMBER: fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxCertificate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_CERTIFICATE: fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxExmptPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_EXMPT_PERCENT: fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link exemptionDateBegin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXEMPTION_DATE_BEGIN: fieldBuilder.buildEdmTypeField('ExemptionDateBegin', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link exemptionDateEnd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXEMPTION_DATE_END: fieldBuilder.buildEdmTypeField('ExemptionDateEnd', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link exemptionReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXEMPTION_REASON: fieldBuilder.buildEdmTypeField('ExemptionReason', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerWithHoldingTax_1.CustomerWithHoldingTax)
            };
        }
        return this._schema;
    }
}
exports.CustomerWithHoldingTaxApi = CustomerWithHoldingTaxApi;
//# sourceMappingURL=CustomerWithHoldingTaxApi.js.map