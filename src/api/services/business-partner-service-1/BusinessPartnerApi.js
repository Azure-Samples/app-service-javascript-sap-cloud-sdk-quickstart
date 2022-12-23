"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessPartner_1 = require("./BusinessPartner");
const BusinessPartnerRequestBuilder_1 = require("./BusinessPartnerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartner_1.BusinessPartner;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BU_PA_IDENTIFICATION: new odata_v2_1.Link('to_BuPaIdentification', this, linkedApis[0]),
            TO_BU_PA_INDUSTRY: new odata_v2_1.Link('to_BuPaIndustry', this, linkedApis[1]),
            TO_BUSINESS_PARTNER_ADDRESS: new odata_v2_1.Link('to_BusinessPartnerAddress', this, linkedApis[2]),
            TO_BUSINESS_PARTNER_BANK: new odata_v2_1.Link('to_BusinessPartnerBank', this, linkedApis[3]),
            TO_BUSINESS_PARTNER_CONTACT: new odata_v2_1.Link('to_BusinessPartnerContact', this, linkedApis[4]),
            TO_BUSINESS_PARTNER_ROLE: new odata_v2_1.Link('to_BusinessPartnerRole', this, linkedApis[5]),
            TO_BUSINESS_PARTNER_TAX: new odata_v2_1.Link('to_BusinessPartnerTax', this, linkedApis[6]),
            TO_CUSTOMER: new odata_v2_1.OneToOneLink('to_Customer', this, linkedApis[7]),
            TO_SUPPLIER: new odata_v2_1.OneToOneLink('to_Supplier', this, linkedApis[8])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerRequestBuilder_1.BusinessPartnerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartner_1.BusinessPartner, this.deSerializers);
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
                 * Static representation of the {@link customer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true),
                /**
                 * Static representation of the {@link academicTitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACADEMIC_TITLE: fieldBuilder.buildEdmTypeField('AcademicTitle', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_CATEGORY: fieldBuilder.buildEdmTypeField('BusinessPartnerCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_FULL_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerGrouping} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_GROUPING: fieldBuilder.buildEdmTypeField('BusinessPartnerGrouping', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_UUID: fieldBuilder.buildEdmTypeField('BusinessPartnerUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link correspondenceLanguage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link creationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true),
                /**
                 * Static representation of the {@link formOfAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link industry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true),
                /**
                 * Static representation of the {@link internationalLocationNumber1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                /**
                 * Static representation of the {@link internationalLocationNumber2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true),
                /**
                 * Static representation of the {@link isFemale} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_FEMALE: fieldBuilder.buildEdmTypeField('IsFemale', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isMale} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MALE: fieldBuilder.buildEdmTypeField('IsMale', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isNaturalPerson} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.String', true),
                /**
                 * Static representation of the {@link isSexUnknown} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_SEX_UNKNOWN: fieldBuilder.buildEdmTypeField('IsSexUnknown', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link genderCodeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GENDER_CODE_NAME: fieldBuilder.buildEdmTypeField('GenderCodeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link lastChangeTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_TIME: fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link lastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link legalForm} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LEGAL_FORM: fieldBuilder.buildEdmTypeField('LegalForm', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationBpName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_BP_NAME_1: fieldBuilder.buildEdmTypeField('OrganizationBPName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationBpName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_BP_NAME_2: fieldBuilder.buildEdmTypeField('OrganizationBPName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationBpName3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_BP_NAME_3: fieldBuilder.buildEdmTypeField('OrganizationBPName3', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationBpName4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_BP_NAME_4: fieldBuilder.buildEdmTypeField('OrganizationBPName4', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationFoundationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_FOUNDATION_DATE: fieldBuilder.buildEdmTypeField('OrganizationFoundationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link organizationLiquidationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_LIQUIDATION_DATE: fieldBuilder.buildEdmTypeField('OrganizationLiquidationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link searchTerm1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEARCH_TERM_1: fieldBuilder.buildEdmTypeField('SearchTerm1', 'Edm.String', true),
                /**
                 * Static representation of the {@link searchTerm2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEARCH_TERM_2: fieldBuilder.buildEdmTypeField('SearchTerm2', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalLastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_LAST_NAME: fieldBuilder.buildEdmTypeField('AdditionalLastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link birthDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BIRTH_DATE: fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link businessPartnerBirthDateStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_BIRTH_DATE_STATUS: fieldBuilder.buildEdmTypeField('BusinessPartnerBirthDateStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerBirthplaceName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_BIRTHPLACE_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerBirthplaceName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerDeathDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_DEATH_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerDeathDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link businessPartnerIsBlocked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_IS_BLOCKED: fieldBuilder.buildEdmTypeField('BusinessPartnerIsBlocked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link businessPartnerType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_TYPE: fieldBuilder.buildEdmTypeField('BusinessPartnerType', 'Edm.String', true),
                /**
                 * Static representation of the {@link eTag} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                E_TAG: fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true),
                /**
                 * Static representation of the {@link groupBusinessPartnerName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GROUP_BUSINESS_PARTNER_NAME_1: fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link groupBusinessPartnerName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GROUP_BUSINESS_PARTNER_NAME_2: fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link independentAddressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INDEPENDENT_ADDRESS_ID: fieldBuilder.buildEdmTypeField('IndependentAddressID', 'Edm.String', true),
                /**
                 * Static representation of the {@link internationalLocationNumber3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true),
                /**
                 * Static representation of the {@link middleName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIDDLE_NAME: fieldBuilder.buildEdmTypeField('MiddleName', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_COUNTRY: fieldBuilder.buildEdmTypeField('NameCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameFormat} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_FORMAT: fieldBuilder.buildEdmTypeField('NameFormat', 'Edm.String', true),
                /**
                 * Static representation of the {@link personFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link personNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_NUMBER: fieldBuilder.buildEdmTypeField('PersonNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link isMarkedForArchiving} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_ARCHIVING: fieldBuilder.buildEdmTypeField('IsMarkedForArchiving', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link businessPartnerIdByExtSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: fieldBuilder.buildEdmTypeField('BusinessPartnerIDByExtSystem', 'Edm.String', true),
                /**
                 * Static representation of the {@link tradingPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRADING_PARTNER: fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartner_1.BusinessPartner)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerApi = BusinessPartnerApi;
//# sourceMappingURL=BusinessPartnerApi.js.map