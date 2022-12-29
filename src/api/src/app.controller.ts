import { Controller, Get, Render } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getHello (): Promise<object> {
    return await this.appService.getHello()
  }
}
