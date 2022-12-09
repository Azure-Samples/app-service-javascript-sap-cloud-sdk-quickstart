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
import type { AddressHomePageUrlApi } from './AddressHomePageUrlApi';

/**
 * This class represents the entity "A_AddressHomePageURL" of service "API_BUSINESS_PARTNER".
 */
export class AddressHomePageUrl<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressHomePageUrlType<T>
{
  /**
   * Technical entity name for AddressHomePageUrl.
   */
  static _entityName = 'A_AddressHomePageURL';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the AddressHomePageUrl entity
   */
  static _keys = [
    'AddressID',
    'Person',
    'OrdinalNumber',
    'ValidityStartDate',
    'IsDefaultURLAddress'
  ];
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
   * Valid-from date - in current Release only 00010101 possible.
   */
  validityStartDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Flag: this address is the default address.
   */
  isDefaultUrlAddress!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * URI address search field.
   * Maximum length: 50.
   * @nullable
   */
  searchUrlAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Communication link notes.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * URI field length.
   * @nullable
   */
  urlFieldLength?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * Universal Resource Identifier (URI).
   * Maximum length: 2048.
   * @nullable
   */
  websiteUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: AddressHomePageUrlApi<T>) {
    super(_entityApi);
  }
}

export interface AddressHomePageUrlType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressId: DeserializedType<T, 'Edm.String'>;
  person: DeserializedType<T, 'Edm.String'>;
  ordinalNumber: DeserializedType<T, 'Edm.String'>;
  validityStartDate: DeserializedType<T, 'Edm.DateTime'>;
  isDefaultUrlAddress: DeserializedType<T, 'Edm.Boolean'>;
  searchUrlAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
  urlFieldLength?: DeserializedType<T, 'Edm.Int16'> | null;
  websiteUrl?: DeserializedType<T, 'Edm.String'> | null;
}
