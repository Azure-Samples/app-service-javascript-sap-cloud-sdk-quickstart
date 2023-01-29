import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	async getHello(): Promise<object> {
		return {
			title: "SAP Cloud SDK on Azure",
			message: "Hello Azure! Greetings from the",
		};
	}
}
