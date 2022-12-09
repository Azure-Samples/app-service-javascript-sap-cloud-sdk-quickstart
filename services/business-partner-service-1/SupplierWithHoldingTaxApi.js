"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWithHoldingTaxApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SupplierWithHoldingTax_1 = require("./SupplierWithHoldingTax");
const SupplierWithHoldingTaxRequestBuilder_1 = require("./SupplierWithHoldingTaxRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierWithHoldingTaxApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierWithHoldingTax_1.SupplierWithHoldingTax;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SupplierWithHoldingTaxRequestBuilder_1.SupplierWithHoldingTaxRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierWithHoldingTax_1.SupplierWithHoldingTax, this.deSerializers);
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
                 * Static representation of the {@link withholdingTaxType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_TYPE: fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', false),
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
                 * Static representation of the {@link isWithholdingTaxSubject} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_WITHHOLDING_TAX_SUBJECT: fieldBuilder.buildEdmTypeField('IsWithholdingTaxSubject', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link recipientType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECIPIENT_TYPE: fieldBuilder.buildEdmTypeField('RecipientType', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxCertificate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_CERTIFICATE: fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxExmptPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_EXMPT_PERCENT: fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link withholdingTaxNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_NUMBER: fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierWithHoldingTax_1.SupplierWithHoldingTax)
            };
        }
        return this._schema;
    }
}
exports.SupplierWithHoldingTaxApi = SupplierWithHoldingTaxApi;
//# sourceMappingURL=SupplierWithHoldingTaxApi.js.map