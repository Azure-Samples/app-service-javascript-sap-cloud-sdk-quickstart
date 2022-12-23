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
import type { BusinessPartnerRoleApi } from './BusinessPartnerRoleApi';

/**
 * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerRole<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessPartnerRoleType<T>
{
  /**
   * Technical entity name for BusinessPartnerRole.
   */
  static _entityName = 'A_BusinessPartnerRole';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the BusinessPartnerRole entity
   */
  static _keys = ['BusinessPartner', 'BusinessPartnerRole'];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: DeserializedType<T, 'Edm.String'>;
  /**
   * BP Role.
   * Maximum length: 6.
   */
  businessPartnerRole!: DeserializedType<T, 'Edm.String'>;
  /**
   * Validity Start of a BP Role.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity End of a BP Role.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BusinessPartnerRoleApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnerRoleType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  businessPartnerRole: DeserializedType<T, 'Edm.String'>;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
