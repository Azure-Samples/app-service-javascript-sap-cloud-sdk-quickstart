"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToAddressRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link BpContactToAddress} entity.
 */
class BpContactToAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BpContactToAddress` entity based on its keys.
     * @param relationshipNumber Key property. See {@link BpContactToAddress.relationshipNumber}.
     * @param businessPartnerCompany Key property. See {@link BpContactToAddress.businessPartnerCompany}.
     * @param businessPartnerPerson Key property. See {@link BpContactToAddress.businessPartnerPerson}.
     * @param validityEndDate Key property. See {@link BpContactToAddress.validityEndDate}.
     * @param addressId Key property. See {@link BpContactToAddress.addressId}.
     * @returns A request builder for creating requests to retrieve one `BpContactToAddress` entity based on its keys.
     */
    getByKey(relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            RelationshipNumber: relationshipNumber,
            BusinessPartnerCompany: businessPartnerCompany,
            BusinessPartnerPerson: businessPartnerPerson,
            ValidityEndDate: validityEndDate,
            AddressID: addressId
        });
    }
    /**
     * Returns a request builder for querying all `BpContactToAddress` entities.
     * @returns A request builder for creating requests to retrieve all `BpContactToAddress` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.BpContactToAddressRequestBuilder = BpContactToAddressRequestBuilder;
//# sourceMappingURL=BpContactToAddressRequestBuilder.js.map