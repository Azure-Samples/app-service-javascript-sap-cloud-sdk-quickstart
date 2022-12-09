/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerContact } from './BusinessPartnerContact';
import { BusinessPartnerContactRequestBuilder } from './BusinessPartnerContactRequestBuilder';
import { BpContactToAddressApi } from './BpContactToAddressApi';
import { BpContactToFuncAndDeptApi } from './BpContactToFuncAndDeptApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class BusinessPartnerContactApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartnerContact<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      BpContactToAddressApi<DeSerializersT>,
      BpContactToFuncAndDeptApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof BusinessPartnerContact;
  requestBuilder(): BusinessPartnerContactRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessPartnerContact<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessPartnerContact<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusinessPartnerContact,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    RELATIONSHIP_NUMBER: OrderableEdmTypeField<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_PARTNER_COMPANY: OrderableEdmTypeField<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_PARTNER_PERSON: OrderableEdmTypeField<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    IS_STANDARD_RELATIONSHIP: OrderableEdmTypeField<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    RELATIONSHIP_CATEGORY: OrderableEdmTypeField<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toContactAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CONTACT_ADDRESS: Link<
      BusinessPartnerContact<DeSerializersT>,
      DeSerializersT,
      BpContactToAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toContactRelationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CONTACT_RELATIONSHIP: OneToOneLink<
      BusinessPartnerContact<DeSerializersT>,
      DeSerializersT,
      BpContactToFuncAndDeptApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BusinessPartnerContact<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
//# sourceMappingURL=BusinessPartnerContactApi.d.ts.map
