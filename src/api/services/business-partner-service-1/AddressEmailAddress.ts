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
import type { AddressEmailAddressApi } from './AddressEmailAddressApi';

/**
 * This class represents the entity "A_AddressEmailAddress" of service "API_BUSINESS_PARTNER".
 */
export class AddressEmailAddress<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressEmailAddressType<T>
{
  /**
   * Technical entity name for AddressEmailAddress.
   */
  static _entityName = 'A_AddressEmailAddress';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the AddressEmailAddress entity
   */
  static _keys = ['AddressID', 'Person', 'OrdinalNumber'];
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Number.
   * Maximum length: 10.
   */
  person!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   * Maximum length: 3.
   */
  ordinalNumber!: DeserializedType<T, 'Edm.String'>;
  /**
   * Flag: this address is the default address.
   * @nullable
   */
  isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * E-Mail Address.
   * Maximum length: 241.
   * @nullable
   */
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E-Mail Address Search Field.
   * Maximum length: 20.
   * @nullable
   */
  searchEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Communication link notes.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: AddressEmailAddressApi<T>) {
    super(_entityApi);
  }
}

export interface AddressEmailAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressId: DeserializedType<T, 'Edm.String'>;
  person: DeserializedType<T, 'Edm.String'>;
  ordinalNumber: DeserializedType<T, 'Edm.String'>;
  isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  searchEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
