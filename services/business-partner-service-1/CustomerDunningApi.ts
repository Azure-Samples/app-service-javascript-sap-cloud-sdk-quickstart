/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerDunning } from './CustomerDunning';
import { CustomerDunningRequestBuilder } from './CustomerDunningRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class CustomerDunningApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerDunning<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomerDunning;

  requestBuilder(): CustomerDunningRequestBuilder<DeSerializersT> {
    return new CustomerDunningRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerDunning<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerDunning<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomerDunning<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomerDunning, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerDunning,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CUSTOMER: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DUNNING_AREA: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DUNNING_BLOCK: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNNING_LEVEL: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNNING_PROCEDURE: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNNING_RECIPIENT: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_DUNNED_ON: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LEG_DUNNING_PROCEDURE_ON: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DUNNING_CLERK: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_GROUP: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_GROUP: OrderableEdmTypeField<
      CustomerDunning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomerDunning<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dunningArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_AREA: fieldBuilder.buildEdmTypeField(
          'DunningArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dunningBlock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_BLOCK: fieldBuilder.buildEdmTypeField(
          'DunningBlock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunningLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_LEVEL: fieldBuilder.buildEdmTypeField(
          'DunningLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunningProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'DunningProcedure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunningRecipient} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_RECIPIENT: fieldBuilder.buildEdmTypeField(
          'DunningRecipient',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastDunnedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DUNNED_ON: fieldBuilder.buildEdmTypeField(
          'LastDunnedOn',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link legDunningProcedureOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEG_DUNNING_PROCEDURE_ON: fieldBuilder.buildEdmTypeField(
          'LegDunningProcedureOn',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link dunningClerk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_CLERK: fieldBuilder.buildEdmTypeField(
          'DunningClerk',
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
         * Static representation of the {@link customerAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerAccountGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerDunning)
      };
    }

    return this._schema;
  }
}
