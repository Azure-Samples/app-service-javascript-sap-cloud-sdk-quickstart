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
import type { AddressPhoneNumberApi } from './AddressPhoneNumberApi';
/**
 * This class represents the entity "A_AddressPhoneNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressPhoneNumber<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddressPhoneNumberType<T>
{
  readonly _entityApi: AddressPhoneNumberApi<T>;
  /**
   * Technical entity name for AddressPhoneNumber.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the AddressPhoneNumber entity
   */
  static _keys: string[];
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Number.
   * Maximum length: 10.
   */
  person: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   * Maximum length: 3.
   */
  ordinalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard Sender Address in this Communication Type.
   * @nullable
   */
  isDefaultPhoneNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Telephone no.: dialling code+number.
   * Maximum length: 30.
   * @nullable
   */
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Number: Dialling Code+Number+Extension.
   * Maximum length: 30.
   * @nullable
   */
  internationalPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Telephone is a Mobile Telephone.
   * Maximum length: 1.
   * @nullable
   */
  phoneNumberType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Communication link notes.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: AddressPhoneNumberApi<T>);
}
export interface AddressPhoneNumberType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressId: DeserializedType<T, 'Edm.String'>;
  person: DeserializedType<T, 'Edm.String'>;
  ordinalNumber: DeserializedType<T, 'Edm.String'>;
  destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultPhoneNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  internationalPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumberType?: DeserializedType<T, 'Edm.String'> | null;
  addressCommunicationRemarkText?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=AddressPhoneNumber.d.ts.map
