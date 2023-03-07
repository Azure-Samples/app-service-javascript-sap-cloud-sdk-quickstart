import { Test, TestingModule } from "@nestjs/testing";
import { BusinessPartnerController } from "./business-partner.controller";
import { BusinessPartnerService } from "./business-partner.service";

describe("BusinessPartnerController", () => {
	let controller: BusinessPartnerController;
	let service: BusinessPartnerService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [BusinessPartnerController],
			providers: [BusinessPartnerService],
		}).compile();

		controller = module.get<BusinessPartnerController>(
			BusinessPartnerController,
		);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
