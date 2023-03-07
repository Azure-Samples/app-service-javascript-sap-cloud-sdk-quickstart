/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartner } from './BusinessPartner';
import { BusinessPartnerRequestBuilder } from './BusinessPartnerRequestBuilder';
import { BuPaIdentificationApi } from './BuPaIdentificationApi';
import { BuPaIndustryApi } from './BuPaIndustryApi';
import { BusinessPartnerAddressApi } from './BusinessPartnerAddressApi';
import { BusinessPartnerBankApi } from './BusinessPartnerBankApi';
import { BusinessPartnerContactApi } from './BusinessPartnerContactApi';
import { BusinessPartnerRoleApi } from './BusinessPartnerRoleApi';
import { BusinessPartnerTaxNumberApi } from './BusinessPartnerTaxNumberApi';
import { CustomerApi } from './CustomerApi';
import { SupplierApi } from './SupplierApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  Time,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class BusinessPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartner<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BusinessPartnerApi<DeSerializersT> {
    return new BusinessPartnerApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toBuPaIdentification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BU_PA_IDENTIFICATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BuPaIdentificationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBuPaIndustry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BU_PA_INDUSTRY: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BuPaIndustryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_ADDRESS: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerBank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_BANK: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerBankApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerContact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_CONTACT: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerContactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_ROLE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRoleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_TAX: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerTaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CUSTOMER: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      CustomerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSupplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      SupplierApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BuPaIdentificationApi<DeSerializersT>,
      BuPaIndustryApi<DeSerializersT>,
      BusinessPartnerAddressApi<DeSerializersT>,
      BusinessPartnerBankApi<DeSerializersT>,
      BusinessPartnerContactApi<DeSerializersT>,
      BusinessPartnerRoleApi<DeSerializersT>,
      BusinessPartnerTaxNumberApi<DeSerializersT>,
      CustomerApi<DeSerializersT>,
      SupplierApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BU_PA_IDENTIFICATION: new Link(
        'to_BuPaIdentification',
        this,
        linkedApis[0]
      ),
      TO_BU_PA_INDUSTRY: new Link('to_BuPaIndustry', this, linkedApis[1]),
      TO_BUSINESS_PARTNER_ADDRESS: new Link(
        'to_BusinessPartnerAddress',
        this,
        linkedApis[2]
      ),
      TO_BUSINESS_PARTNER_BANK: new Link(
        'to_BusinessPartnerBank',
        this,
        linkedApis[3]
      ),
      TO_BUSINESS_PARTNER_CONTACT: new Link(
        'to_BusinessPartnerContact',
        this,
        linkedApis[4]
      ),
      TO_BUSINESS_PARTNER_ROLE: new Link(
        'to_BusinessPartnerRole',
        this,
        linkedApis[5]
      ),
      TO_BUSINESS_PARTNER_TAX: new Link(
        'to_BusinessPartnerTax',
        this,
        linkedApis[6]
      ),
      TO_CUSTOMER: new OneToOneLink('to_Customer', this, linkedApis[7]),
      TO_SUPPLIER: new OneToOneLink('to_Supplier', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = BusinessPartner;

  requestBuilder(): BusinessPartnerRequestBuilder<DeSerializersT> {
    return new BusinessPartnerRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPartner<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BusinessPartner<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BusinessPartner, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessPartner,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUSINESS_PARTNER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACADEMIC_TITLE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_GROUP: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_CATEGORY: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_FULL_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_GROUPING: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_UUID: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_LOCATION_NUMBER_1: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_LOCATION_NUMBER_2: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FEMALE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_MALE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_NATURAL_PERSON: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SEX_UNKNOWN: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    GENDER_CODE_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_CHANGE_TIME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_FORM: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_BP_NAME_1: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_BP_NAME_2: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_BP_NAME_3: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_BP_NAME_4: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_FOUNDATION_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ORGANIZATION_LIQUIDATION_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    SEARCH_TERM_1: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_TERM_2: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_LAST_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BUSINESS_PARTNER_BIRTH_DATE_STATUS: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_BIRTHPLACE_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_DEATH_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BUSINESS_PARTNER_IS_BLOCKED: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BUSINESS_PARTNER_TYPE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_TAG: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_BUSINESS_PARTNER_NAME_1: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_BUSINESS_PARTNER_NAME_2: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDEPENDENT_ADDRESS_ID: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_LOCATION_NUMBER_3: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_COUNTRY: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FORMAT: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FULL_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_NUMBER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MARKED_FOR_ARCHIVING: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRADING_PARTNER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBuPaIdentification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BU_PA_IDENTIFICATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BuPaIdentificationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBuPaIndustry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BU_PA_INDUSTRY: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BuPaIndustryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_ADDRESS: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerBank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_BANK: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerBankApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerContact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_CONTACT: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerContactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_ROLE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRoleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_TAX: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerTaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CUSTOMER: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      CustomerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSupplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      SupplierApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartner<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link businessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'BusinessPartner',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link academicTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACADEMIC_TITLE: fieldBuilder.buildEdmTypeField(
          'AcademicTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField(
          'AuthorizationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerFullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerGrouping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_GROUPING: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerGrouping',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_UUID: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link correspondenceLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'CorrespondenceLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formOfAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormOfAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY: fieldBuilder.buildEdmTypeField(
          'Industry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internationalLocationNumber1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField(
          'InternationalLocationNumber1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internationalLocationNumber2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField(
          'InternationalLocationNumber2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFemale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FEMALE: fieldBuilder.buildEdmTypeField(
          'IsFemale',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isMale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MALE: fieldBuilder.buildEdmTypeField('IsMale', 'Edm.Boolean', true),
        /**
         * Static representation of the {@link isNaturalPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField(
          'IsNaturalPerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSexUnknown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SEX_UNKNOWN: fieldBuilder.buildEdmTypeField(
          'IsSexUnknown',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link genderCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'GenderCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link lastChangeTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_TIME: fieldBuilder.buildEdmTypeField(
          'LastChangeTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_FORM: fieldBuilder.buildEdmTypeField(
          'LegalForm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationBpName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_BP_NAME_1: fieldBuilder.buildEdmTypeField(
          'OrganizationBPName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationBpName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_BP_NAME_2: fieldBuilder.buildEdmTypeField(
          'OrganizationBPName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationBpName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_BP_NAME_3: fieldBuilder.buildEdmTypeField(
          'OrganizationBPName3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationBpName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_BP_NAME_4: fieldBuilder.buildEdmTypeField(
          'OrganizationBPName4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationFoundationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_FOUNDATION_DATE: fieldBuilder.buildEdmTypeField(
          'OrganizationFoundationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link organizationLiquidationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_LIQUIDATION_DATE: fieldBuilder.buildEdmTypeField(
          'OrganizationLiquidationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link searchTerm1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_TERM_1: fieldBuilder.buildEdmTypeField(
          'SearchTerm1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link searchTerm2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_TERM_2: fieldBuilder.buildEdmTypeField(
          'SearchTerm2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'AdditionalLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'BirthDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerBirthDateStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_BIRTH_DATE_STATUS: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerBirthDateStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerBirthplaceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_BIRTHPLACE_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerBirthplaceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerDeathDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_DEATH_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerDeathDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerIsBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_IS_BLOCKED: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerIsBlocked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_TYPE: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_TAG: fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true),
        /**
         * Static representation of the {@link groupBusinessPartnerName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_BUSINESS_PARTNER_NAME_1: fieldBuilder.buildEdmTypeField(
          'GroupBusinessPartnerName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupBusinessPartnerName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_BUSINESS_PARTNER_NAME_2: fieldBuilder.buildEdmTypeField(
          'GroupBusinessPartnerName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link independentAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEPENDENT_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'IndependentAddressID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internationalLocationNumber3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField(
          'InternationalLocationNumber3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_COUNTRY: fieldBuilder.buildEdmTypeField(
          'NameCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FORMAT: fieldBuilder.buildEdmTypeField(
          'NameFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'PersonFullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMarkedForArchiving} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_ARCHIVING: fieldBuilder.buildEdmTypeField(
          'IsMarkedForArchiving',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerIdByExtSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerIDByExtSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tradingPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRADING_PARTNER: fieldBuilder.buildEdmTypeField(
          'TradingPartner',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPartner)
      };
    }

    return this._schema;
  }
}
