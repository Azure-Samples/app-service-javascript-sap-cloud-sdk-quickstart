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
import type { BuPaAddressUsageApi } from './BuPaAddressUsageApi';
/**
 * This class represents the entity "A_BuPaAddressUsage" of service "API_BUSINESS_PARTNER".
 */
export declare class BuPaAddressUsage<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BuPaAddressUsageType<T>
{
  readonly _entityApi: BuPaAddressUsageApi<T>;
  /**
   * Technical entity name for BuPaAddressUsage.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the BuPaAddressUsage entity
   */
  static _keys: string[];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * Validity End of a Business Partner Address Usage.
   */
  validityEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Type.
   * Maximum length: 10.
   */
  addressUsage: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Validity Start of a Business Partner Address Usage.
   * @nullable
   */
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Indicator: Standard Address Usage.
   * @nullable
   */
  standardUsage?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: BuPaAddressUsageApi<T>);
}
export interface BuPaAddressUsageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  validityEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressUsage: DeserializedType<T, 'Edm.String'>;
  addressId: DeserializedType<T, 'Edm.String'>;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  standardUsage?: DeserializedType<T, 'Edm.Boolean'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=BuPaAddressUsage.d.ts.map
