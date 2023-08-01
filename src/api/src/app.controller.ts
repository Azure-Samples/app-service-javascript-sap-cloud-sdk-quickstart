import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async getHello(): Promise<object> {
		return await this.appService.getHello();
	}

	@Get('/health')
	async getHealthStatus(): Promise<object> {
		return await this.appService.checkServiceAvailability();
	}
}
