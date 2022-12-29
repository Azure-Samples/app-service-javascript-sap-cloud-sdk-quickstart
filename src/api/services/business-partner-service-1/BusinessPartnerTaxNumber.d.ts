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
import type { BusinessPartnerTaxNumberApi } from './BusinessPartnerTaxNumberApi';
/**
 * This class represents the entity "A_BusinessPartnerTaxNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerTaxNumber<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessPartnerTaxNumberType<T>
{
  readonly _entityApi: BusinessPartnerTaxNumberApi<T>;
  /**
   * Technical entity name for BusinessPartnerTaxNumber.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the BusinessPartnerTaxNumber entity
   */
  static _keys: string[];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Number Category.
   * Maximum length: 4.
   */
  bpTaxType: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Tax Number.
   * Maximum length: 20.
   * @nullable
   */
  bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Tax Number.
   * Maximum length: 60.
   * @nullable
   */
  bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: BusinessPartnerTaxNumberApi<T>);
}
export interface BusinessPartnerTaxNumberType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  bpTaxType: DeserializedType<T, 'Edm.String'>;
  bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=BusinessPartnerTaxNumber.d.ts.map
