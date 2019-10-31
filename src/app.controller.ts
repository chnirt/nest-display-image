import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('uploads/:fileId')
  getUpload(@Param('fileId') fileId, @Res() res): any {
    // tslint:disable-next-line:no-console
    console.log('aaa', fileId);
    return res.sendFile(fileId, {
      root: 'uploads',
    });
  }
}
