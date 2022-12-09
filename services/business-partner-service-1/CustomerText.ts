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
import type { CustomerTextApi } from './CustomerTextApi';

/**
 * This class represents the entity "A_CustomerText" of service "API_BUSINESS_PARTNER".
 */
export class CustomerText<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerTextType<T>
{
  /**
   * Technical entity name for CustomerText.
   */
  static _entityName = 'A_CustomerText';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerText entity
   */
  static _keys = ['Customer', 'Language', 'LongTextID'];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Language key.
   * Maximum length: 2.
   */
  language!: DeserializedType<T, 'Edm.String'>;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  longTextId!: DeserializedType<T, 'Edm.String'>;
  /**
   * String.
   * @nullable
   */
  longText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustomerTextApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longTextId: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
