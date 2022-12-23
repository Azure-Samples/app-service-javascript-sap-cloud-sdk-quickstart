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
import type { SupplierTextApi } from './SupplierTextApi';
/**
 * This class represents the entity "A_SupplierText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SupplierTextType<T>
{
  readonly _entityApi: SupplierTextApi<T>;
  /**
   * Technical entity name for SupplierText.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the SupplierText entity
   */
  static _keys: string[];
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier: DeserializedType<T, 'Edm.String'>;
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
  constructor(_entityApi: SupplierTextApi<T>);
}
export interface SupplierTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplier: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longTextId: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=SupplierText.d.ts.map
