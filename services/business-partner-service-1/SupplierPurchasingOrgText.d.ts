/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SupplierPurchasingOrgTextApi } from './SupplierPurchasingOrgTextApi';
/**
 * This class represents the entity "A_SupplierPurchasingOrgText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierPurchasingOrgText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SupplierPurchasingOrgTextType<T>
{
  readonly _entityApi: SupplierPurchasingOrgTextApi<T>;
  /**
   * Technical entity name for SupplierPurchasingOrgText.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SupplierPurchasingOrgText entity
   */
  static _keys: string[];
  /**
   * Supplier.
   * Maximum length: 10.
   */
  supplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   */
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  /**
   * Language key.
   * Maximum length: 2.
   */
  language: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  longTextId: DeserializedType<T, 'Edm.String'>;
  /**
   * String.
   * @nullable
   */
  longText?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: SupplierPurchasingOrgTextApi<T>);
}
export interface SupplierPurchasingOrgTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplier: DeserializedType<T, 'Edm.String'>;
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longTextId: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=SupplierPurchasingOrgText.d.ts.map
