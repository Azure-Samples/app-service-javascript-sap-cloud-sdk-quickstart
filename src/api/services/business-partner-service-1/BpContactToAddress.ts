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
import type { BpContactToAddressApi } from './BpContactToAddressApi';
import {
  AddressEmailAddress,
  AddressEmailAddressType
} from './AddressEmailAddress';
import { AddressFaxNumber, AddressFaxNumberType } from './AddressFaxNumber';
import {
  AddressPhoneNumber,
  AddressPhoneNumberType
} from './AddressPhoneNumber';
import {
  AddressHomePageUrl,
  AddressHomePageUrlType
} from './AddressHomePageUrl';

/**
 * This class represents the entity "A_BPContactToAddress" of service "API_BUSINESS_PARTNER".
 */
export class BpContactToAddress<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BpContactToAddressType<T>
{
  /**
   * Technical entity name for BpContactToAddress.
   */
  static _entityName = 'A_BPContactToAddress';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the BpContactToAddress entity
   */
  static _keys = [
    'RelationshipNumber',
    'BusinessPartnerCompany',
    'BusinessPartnerPerson',
    'ValidityEndDate',
    'AddressID'
  ];
  /**
   * BP Relationship Number.
   * Maximum length: 12.
   */
  relationshipNumber!: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartnerCompany!: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartnerPerson!: DeserializedType<T, 'Edm.String'>;
  /**
   * Validity Date (Valid To).
   */
  validityEndDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Number.
   * Maximum length: 10.
   * @nullable
   */
  addressNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 3.
   * Maximum length: 40.
   * @nullable
   */
  additionalStreetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 5.
   * Maximum length: 40.
   * @nullable
   */
  additionalStreetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address time zone.
   * Maximum length: 6.
   * @nullable
   */
  addressTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * c/o name.
   * Maximum length: 40.
   * @nullable
   */
  careOfName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City code for city/street file.
   * Maximum length: 12.
   * @nullable
   */
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Postal Code (for Large Customers).
   * Maximum length: 10.
   * @nullable
   */
  companyPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * Maximum length: 40.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number of Delivery Service.
   * Maximum length: 10.
   * @nullable
   */
  deliveryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type of Delivery Service.
   * Maximum length: 4.
   * @nullable
   */
  deliveryServiceTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District.
   * Maximum length: 40.
   * @nullable
   */
  district?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full name of a party (Bus. Partner, Org. Unit, Doc. address).
   * Maximum length: 80.
   * @nullable
   */
  fullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City (different from postal city).
   * Maximum length: 40.
   * @nullable
   */
  homeCityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Number.
   * Maximum length: 10.
   * @nullable
   */
  houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House number supplement.
   * Maximum length: 10.
   * @nullable
   */
  houseNumberSupplementText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Key.
   * Maximum length: 2.
   * @nullable
   */
  language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box.
   * Maximum length: 10.
   * @nullable
   */
  poBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box city.
   * Maximum length: 40.
   * @nullable
   */
  poBoxDeviatingCityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box of Country/Region.
   * Maximum length: 3.
   * @nullable
   */
  poBoxDeviatingCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region for PO Box (Country/Region, State, Province, ...).
   * Maximum length: 3.
   * @nullable
   */
  poBoxDeviatingRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flag: PO Box Without Number.
   * @nullable
   */
  poBoxIsWithoutNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * PO Box Lobby.
   * Maximum length: 40.
   * @nullable
   */
  poBoxLobbyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Box Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Number.
   * Maximum length: 10.
   * @nullable
   */
  person?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City postal code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Communication Method (Key) (Business Address Services).
   * Maximum length: 3.
   * @nullable
   */
  prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * Maximum length: 60.
   * @nullable
   */
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 2.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street 4.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation zone to or from which the goods are delivered.
   * Maximum length: 10.
   * @nullable
   */
  transportZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version ID for International Addresses.
   * Maximum length: 1.
   * @nullable
   */
  addressRepresentationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Function.
   * Maximum length: 40.
   * @nullable
   */
  contactRelationshipFunction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * Maximum length: 40.
   * @nullable
   */
  contactRelationshipDepartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Floor in building.
   * Maximum length: 10.
   * @nullable
   */
  floor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building (number or code).
   * Maximum length: 10.
   * @nullable
   */
  contactPersonBuilding?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room or Apartment Number.
   * Maximum length: 10.
   * @nullable
   */
  roomNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Communication Method (Key) (Business Address Services).
   * Maximum length: 3.
   * @nullable
   */
  contactPersonPrfrdCommMedium?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short name for correspondence.
   * Maximum length: 10.
   * @nullable
   */
  correspondenceShortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Mail Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  inhouseMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AddressEmailAddress} entity.
   */
  toEmailAddress!: AddressEmailAddress<T>[];
  /**
   * One-to-many navigation property to the {@link AddressFaxNumber} entity.
   */
  toFaxNumber!: AddressFaxNumber<T>[];
  /**
   * One-to-many navigation property to the {@link AddressPhoneNumber} entity.
   */
  toMobilePhoneNumber!: AddressPhoneNumber<T>[];
  /**
   * One-to-many navigation property to the {@link AddressPhoneNumber} entity.
   */
  toPhoneNumber!: AddressPhoneNumber<T>[];
  /**
   * One-to-many navigation property to the {@link AddressHomePageUrl} entity.
   */
  toUrlAddress!: AddressHomePageUrl<T>[];

  constructor(readonly _entityApi: BpContactToAddressApi<T>) {
    super(_entityApi);
  }
}

export interface BpContactToAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  relationshipNumber: DeserializedType<T, 'Edm.String'>;
  businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
  businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
  validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
  addressId: DeserializedType<T, 'Edm.String'>;
  addressNumber?: DeserializedType<T, 'Edm.String'> | null;
  additionalStreetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  additionalStreetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  careOfName?: DeserializedType<T, 'Edm.String'> | null;
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  companyPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  deliveryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryServiceTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  district?: DeserializedType<T, 'Edm.String'> | null;
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  fullName?: DeserializedType<T, 'Edm.String'> | null;
  homeCityName?: DeserializedType<T, 'Edm.String'> | null;
  houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  houseNumberSupplementText?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  poBox?: DeserializedType<T, 'Edm.String'> | null;
  poBoxDeviatingCityName?: DeserializedType<T, 'Edm.String'> | null;
  poBoxDeviatingCountry?: DeserializedType<T, 'Edm.String'> | null;
  poBoxDeviatingRegion?: DeserializedType<T, 'Edm.String'> | null;
  poBoxIsWithoutNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  poBoxLobbyName?: DeserializedType<T, 'Edm.String'> | null;
  poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  person?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  streetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  streetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  transportZone?: DeserializedType<T, 'Edm.String'> | null;
  addressRepresentationCode?: DeserializedType<T, 'Edm.String'> | null;
  contactRelationshipFunction?: DeserializedType<T, 'Edm.String'> | null;
  contactRelationshipDepartment?: DeserializedType<T, 'Edm.String'> | null;
  floor?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonBuilding?: DeserializedType<T, 'Edm.String'> | null;
  roomNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonPrfrdCommMedium?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceShortName?: DeserializedType<T, 'Edm.String'> | null;
  inhouseMail?: DeserializedType<T, 'Edm.String'> | null;
  toEmailAddress: AddressEmailAddressType<T>[];
  toFaxNumber: AddressFaxNumberType<T>[];
  toMobilePhoneNumber: AddressPhoneNumberType<T>[];
  toPhoneNumber: AddressPhoneNumberType<T>[];
  toUrlAddress: AddressHomePageUrlType<T>[];
}
