"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressPhoneNumberApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddressPhoneNumber_1 = require("./AddressPhoneNumber");
const AddressPhoneNumberRequestBuilder_1 = require("./AddressPhoneNumberRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressPhoneNumberApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressPhoneNumber_1.AddressPhoneNumber;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new AddressPhoneNumberRequestBuilder_1.AddressPhoneNumberRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressPhoneNumber_1.AddressPhoneNumber, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                /**
                 * Static representation of the {@link person} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false),
                /**
                 * Static representation of the {@link ordinalNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDINAL_NUMBER: fieldBuilder.buildEdmTypeField('OrdinalNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link destinationLocationCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESTINATION_LOCATION_COUNTRY: fieldBuilder.buildEdmTypeField('DestinationLocationCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link isDefaultPhoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DEFAULT_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('IsDefaultPhoneNumber', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link phoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_NUMBER: fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link phoneNumberExtension} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true),
                /**
                 * Static representation of the {@link internationalPhoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNATIONAL_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('InternationalPhoneNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link phoneNumberType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_NUMBER_TYPE: fieldBuilder.buildEdmTypeField('PhoneNumberType', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressCommunicationRemarkText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_COMMUNICATION_REMARK_TEXT: fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressPhoneNumber_1.AddressPhoneNumber)
            };
        }
        return this._schema;
    }
}
exports.AddressPhoneNumberApi = AddressPhoneNumberApi;
//# sourceMappingURL=AddressPhoneNumberApi.js.map