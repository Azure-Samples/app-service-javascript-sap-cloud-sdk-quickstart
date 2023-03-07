/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SupplierPartnerFuncApi } from './SupplierPartnerFuncApi';

/**
 * This class represents the entity "A_SupplierPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPartnerFunc<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SupplierPartnerFuncType<T>
{
  /**
   * Technical entity name for SupplierPartnerFunc.
   */
  static _entityName = 'A_SupplierPartnerFunc';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the SupplierPartnerFunc entity
   */
  static _keys = [
    'Supplier',
    'PurchasingOrganization',
    'SupplierSubrange',
    'Plant',
    'PartnerFunction',
    'PartnerCounter'
  ];
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplier Subrange.
   * Maximum length: 6.
   */
  supplierSubrange!: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner Function.
   * Maximum length: 2.
   */
  partnerFunction!: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner counter.
   * Maximum length: 3.
   */
  partnerCounter!: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Partner.
   * @nullable
   */
  defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Date on which the record was created.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Name of Person Responsible for Creating the Object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference to other supplier.
   * Maximum length: 10.
   * @nullable
   */
  referenceSupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: SupplierPartnerFuncApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierPartnerFuncType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplier: DeserializedType<T, 'Edm.String'>;
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  supplierSubrange: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  partnerCounter: DeserializedType<T, 'Edm.String'>;
  defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  referenceSupplier?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
