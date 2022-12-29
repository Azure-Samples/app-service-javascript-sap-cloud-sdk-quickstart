/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPurchasingOrg } from './SupplierPurchasingOrg';
import { SupplierPurchasingOrgRequestBuilder } from './SupplierPurchasingOrgRequestBuilder';
import { SupplierPartnerFuncApi } from './SupplierPartnerFuncApi';
import { SupplierPurchasingOrgTextApi } from './SupplierPurchasingOrgTextApi';
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
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class SupplierPurchasingOrgApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toPartnerFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARTNER_FUNCTION: Link<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierPartnerFuncApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPurchasingOrgText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PURCHASING_ORG_TEXT: Link<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierPurchasingOrgTextApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplierPartnerFuncApi<DeSerializersT>,
      SupplierPurchasingOrgTextApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_PARTNER_FUNCTION: new Link('to_PartnerFunction', this, linkedApis[0]),
      TO_PURCHASING_ORG_TEXT: new Link(
        'to_PurchasingOrgText',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SupplierPurchasingOrg;

  requestBuilder(): SupplierPurchasingOrgRequestBuilder<DeSerializersT> {
    return new SupplierPurchasingOrgRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SupplierPurchasingOrg<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SupplierPurchasingOrg<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SupplierPurchasingOrg,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SupplierPurchasingOrg,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SUPPLIER: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_ORGANIZATION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALCULATION_SCHEMA_GROUP_CODE: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELETION_INDICATOR: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_VERSION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_LOCATION_1: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_LOCATION_2: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_IS_GOODS_RECEIPT_BASED: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MATERIAL_PLANNED_DELIVERY_DURN: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MINIMUM_ORDER_AMOUNT: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICING_DATE_CONTROL: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUR_ORD_AUTO_GENERATION_IS_ALLOWED: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PURCHASE_ORDER_CURRENCY: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASING_GROUP: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASING_IS_BLOCKED_FOR_SUPPLIER: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SHIPPING_CONDITION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_ABC_CLASSIFICATION_CODE: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_PHONE_NUMBER: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_RESP_SALES_PERSON_NAME: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_CONFIRMATION_CONTROL_KEY: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ORDER_ACKN_RQD: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    AUTHORIZATION_GROUP: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_ACCOUNT_GROUP: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPartnerFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARTNER_FUNCTION: Link<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierPartnerFuncApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPurchasingOrgText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PURCHASING_ORG_TEXT: Link<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierPurchasingOrgTextApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SupplierPurchasingOrg<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchasingOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'PurchasingOrganization',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calculationSchemaGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SCHEMA_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'CalculationSchemaGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deletionIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETION_INDICATOR: fieldBuilder.buildEdmTypeField(
          'DeletionIndicator',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link incotermsClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'IncotermsClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsTransferLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField(
          'IncotermsTransferLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField(
          'IncotermsVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsLocation1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField(
          'IncotermsLocation1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsLocation2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField(
          'IncotermsLocation2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceIsGoodsReceiptBased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_IS_GOODS_RECEIPT_BASED: fieldBuilder.buildEdmTypeField(
          'InvoiceIsGoodsReceiptBased',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link materialPlannedDeliveryDurn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_PLANNED_DELIVERY_DURN: fieldBuilder.buildEdmTypeField(
          'MaterialPlannedDeliveryDurn',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link minimumOrderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumOrderAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link paymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'PaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pricingDateControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_DATE_CONTROL: fieldBuilder.buildEdmTypeField(
          'PricingDateControl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purOrdAutoGenerationIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUR_ORD_AUTO_GENERATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'PurOrdAutoGenerationIsAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_GROUP: fieldBuilder.buildEdmTypeField(
          'PurchasingGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasingIsBlockedForSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'PurchasingIsBlockedForSupplier',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link shippingCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField(
          'ShippingCondition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierAbcClassificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_ABC_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'SupplierABCClassificationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SupplierPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierRespSalesPersonName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_RESP_SALES_PERSON_NAME: fieldBuilder.buildEdmTypeField(
          'SupplierRespSalesPersonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierConfirmationControlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_CONFIRMATION_CONTROL_KEY: fieldBuilder.buildEdmTypeField(
          'SupplierConfirmationControlKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOrderAcknRqd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ORDER_ACKN_RQD: fieldBuilder.buildEdmTypeField(
          'IsOrderAcknRqd',
          'Edm.Boolean',
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
         * Static representation of the {@link supplierAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'SupplierAccountGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SupplierPurchasingOrg)
      };
    }

    return this._schema;
  }
}
