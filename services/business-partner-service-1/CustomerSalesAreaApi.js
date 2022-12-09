"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSalesAreaApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustomerSalesArea_1 = require("./CustomerSalesArea");
const CustomerSalesAreaRequestBuilder_1 = require("./CustomerSalesAreaRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerSalesAreaApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomerSalesArea_1.CustomerSalesArea;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARTNER_FUNCTION: new odata_v2_1.Link('to_PartnerFunction', this, linkedApis[0]),
            TO_SALES_AREA_TAX: new odata_v2_1.Link('to_SalesAreaTax', this, linkedApis[1]),
            TO_SALES_AREA_TEXT: new odata_v2_1.Link('to_SalesAreaText', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new CustomerSalesAreaRequestBuilder_1.CustomerSalesAreaRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomerSalesArea_1.CustomerSalesArea, this.deSerializers);
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
                 * Static representation of the {@link salesOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false),
                /**
                 * Static representation of the {@link distributionChannel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false),
                /**
                 * Static representation of the {@link division} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false),
                /**
                 * Static representation of the {@link accountByCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_BY_CUSTOMER: fieldBuilder.buildEdmTypeField('AccountByCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link completeDeliveryIsDefined} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPLETE_DELIVERY_IS_DEFINED: fieldBuilder.buildEdmTypeField('CompleteDeliveryIsDefined', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerAbcClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ABC_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerABCClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerAccountAssignmentGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountAssignmentGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPaymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPriceGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PRICE_GROUP: fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPricingProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PRICING_PROCEDURE: fieldBuilder.buildEdmTypeField('CustomerPricingProcedure', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('DeliveryIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryPriority} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_PRIORITY: fieldBuilder.buildEdmTypeField('DeliveryPriority', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_VERSION: fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsLocation1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true),
                /**
                 * Static representation of the {@link deletionIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link incotermsTransferLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link invoiceDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INVOICE_DATE: fieldBuilder.buildEdmTypeField('InvoiceDate', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemOrderProbabilityInPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_ORDER_PROBABILITY_IN_PERCENT: fieldBuilder.buildEdmTypeField('ItemOrderProbabilityInPercent', 'Edm.String', true),
                /**
                 * Static representation of the {@link orderCombinationIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_COMBINATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField('OrderCombinationIsAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link orderIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('OrderIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link partialDeliveryIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTIAL_DELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PartialDeliveryIsAllowed', 'Edm.String', true),
                /**
                 * Static representation of the {@link priceListType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_LIST_TYPE: fieldBuilder.buildEdmTypeField('PriceListType', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                /**
                 * Static representation of the {@link shippingCondition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIPPING_CONDITION: fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplyingPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLYING_PLANT: fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesDistrict} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_DISTRICT: fieldBuilder.buildEdmTypeField('SalesDistrict', 'Edm.String', true),
                /**
                 * Static representation of the {@link invoiceListSchedule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INVOICE_LIST_SCHEDULE: fieldBuilder.buildEdmTypeField('InvoiceListSchedule', 'Edm.String', true),
                /**
                 * Static representation of the {@link exchangeRateType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField('ExchangeRateType', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_1: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_2: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_3: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_4: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalCustomerGroup5} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_CUSTOMER_GROUP_5: fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentGuaranteeProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_GUARANTEE_PROCEDURE: fieldBuilder.buildEdmTypeField('PaymentGuaranteeProcedure', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerAccountGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomerSalesArea_1.CustomerSalesArea)
            };
        }
        return this._schema;
    }
}
exports.CustomerSalesAreaApi = CustomerSalesAreaApi;
//# sourceMappingURL=CustomerSalesAreaApi.js.map