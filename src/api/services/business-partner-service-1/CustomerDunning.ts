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
import type { CustomerDunningApi } from './CustomerDunningApi';

/**
 * This class represents the entity "A_CustomerDunning" of service "API_BUSINESS_PARTNER".
 */
export class CustomerDunning<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerDunningType<T>
{
  /**
   * Technical entity name for CustomerDunning.
   */
  static _entityName = 'A_CustomerDunning';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerDunning entity
   */
  static _keys = ['Customer', 'CompanyCode', 'DunningArea'];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Dunning Area.
   * Maximum length: 2.
   */
  dunningArea!: DeserializedType<T, 'Edm.String'>;
  /**
   * Dunning Block.
   * Maximum length: 1.
   * @nullable
   */
  dunningBlock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Level.
   * Maximum length: 1.
   * @nullable
   */
  dunningLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Procedure.
   * Maximum length: 4.
   * @nullable
   */
  dunningProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Number of the Dunning Recipient.
   * Maximum length: 10.
   * @nullable
   */
  dunningRecipient?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Last Dunning Notice.
   * @nullable
   */
  lastDunnedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of the Legal Dunning Proceedings.
   * @nullable
   */
  legDunningProcedureOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Dunning Clerk.
   * Maximum length: 2.
   * @nullable
   */
  dunningClerk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Group.
   * Maximum length: 4.
   * @nullable
   */
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustomerDunningApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerDunningType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  dunningArea: DeserializedType<T, 'Edm.String'>;
  dunningBlock?: DeserializedType<T, 'Edm.String'> | null;
  dunningLevel?: DeserializedType<T, 'Edm.String'> | null;
  dunningProcedure?: DeserializedType<T, 'Edm.String'> | null;
  dunningRecipient?: DeserializedType<T, 'Edm.String'> | null;
  lastDunnedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  legDunningProcedureOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  dunningClerk?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
}
