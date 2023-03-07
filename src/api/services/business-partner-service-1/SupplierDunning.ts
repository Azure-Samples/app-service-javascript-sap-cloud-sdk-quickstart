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
import type { SupplierDunningApi } from './SupplierDunningApi';

/**
 * This class represents the entity "A_SupplierDunning" of service "API_BUSINESS_PARTNER".
 */
export class SupplierDunning<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SupplierDunningType<T>
{
  /**
   * Technical entity name for SupplierDunning.
   */
  static _entityName = 'A_SupplierDunning';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the SupplierDunning entity
   */
  static _keys = ['Supplier', 'CompanyCode', 'DunningArea'];
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: DeserializedType<T, 'Edm.String'>;
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
   * Account number of the dunning recipient.
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
   * Vendor account group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: SupplierDunningApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierDunningType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplier: DeserializedType<T, 'Edm.String'>;
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
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
}
