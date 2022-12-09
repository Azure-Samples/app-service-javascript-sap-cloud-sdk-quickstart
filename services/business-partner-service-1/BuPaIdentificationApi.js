"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIdentificationApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BuPaIdentification_1 = require("./BuPaIdentification");
const BuPaIdentificationRequestBuilder_1 = require("./BuPaIdentificationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BuPaIdentificationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BuPaIdentification_1.BuPaIdentification;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BuPaIdentificationRequestBuilder_1.BuPaIdentificationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BuPaIdentification_1.BuPaIdentification, this.deSerializers);
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
                 * Static representation of the {@link bpIdentificationType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_IDENTIFICATION_TYPE: fieldBuilder.buildEdmTypeField('BPIdentificationType', 'Edm.String', false),
                /**
                 * Static representation of the {@link bpIdentificationNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField('BPIdentificationNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link bpIdnNmbrIssuingInstitute} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_IDN_NMBR_ISSUING_INSTITUTE: fieldBuilder.buildEdmTypeField('BPIdnNmbrIssuingInstitute', 'Edm.String', true),
                /**
                 * Static representation of the {@link bpIdentificationEntryDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BP_IDENTIFICATION_ENTRY_DATE: fieldBuilder.buildEdmTypeField('BPIdentificationEntryDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                /**
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                /**
                 * Static representation of the {@link validityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', BuPaIdentification_1.BuPaIdentification)
            };
        }
        return this._schema;
    }
}
exports.BuPaIdentificationApi = BuPaIdentificationApi;
//# sourceMappingURL=BuPaIdentificationApi.js.map