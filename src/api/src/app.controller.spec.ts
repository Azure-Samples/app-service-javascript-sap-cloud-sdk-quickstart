import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	let result: object = {
		title: "SAP Cloud SDK on Azure",
		message: "Hello Azure! Greetings from the",
	};

	describe("root", () => {
		it("should return result object", async () => {
			expect(await appController.getHello()).toMatchObject(result);
		});
	});
});
