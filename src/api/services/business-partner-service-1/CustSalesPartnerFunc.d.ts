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
import type { CustSalesPartnerFuncApi } from './CustSalesPartnerFuncApi';
/**
 * This class represents the entity "A_CustSalesPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export declare class CustSalesPartnerFunc<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustSalesPartnerFuncType<T>
{
  readonly _entityApi: CustSalesPartnerFuncApi<T>;
  /**
   * Technical entity name for CustSalesPartnerFunc.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the CustSalesPartnerFunc entity
   */
  static _keys: string[];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  salesOrganization: DeserializedType<T, 'Edm.String'>;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   */
  distributionChannel: DeserializedType<T, 'Edm.String'>;
  /**
   * Division.
   * Maximum length: 2.
   */
  division: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner counter.
   * Maximum length: 3.
   */
  partnerCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Partner Function.
   * Maximum length: 2.
   */
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  bpCustomerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer description of partner (plant, storage location).
   * Maximum length: 30.
   * @nullable
   */
  customerPartnerDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Partner.
   * @nullable
   */
  defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number of Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: CustSalesPartnerFuncApi<T>);
}
export interface CustSalesPartnerFuncType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  salesOrganization: DeserializedType<T, 'Edm.String'>;
  distributionChannel: DeserializedType<T, 'Edm.String'>;
  division: DeserializedType<T, 'Edm.String'>;
  partnerCounter: DeserializedType<T, 'Edm.String'>;
  partnerFunction: DeserializedType<T, 'Edm.String'>;
  bpCustomerNumber?: DeserializedType<T, 'Edm.String'> | null;
  customerPartnerDescription?: DeserializedType<T, 'Edm.String'> | null;
  defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPerson?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=CustSalesPartnerFunc.d.ts.map
