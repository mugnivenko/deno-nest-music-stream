import { Controller, Get, Inject, Res } from "npm:@nestjs/common@9.0.0";
// @deno-types="npm:@types/express@^4.17.17"
import { Response } from "npm:express@^4.18.2";
import { AppService } from "./app.service.ts";
import { Query } from "npm:@nestjs/common@9.0.0";

@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;

  @Get()
  async getFile(@Query("path") path: string, @Res() res: Response) {
    const size = await this.appService.getFileSize(path);

    res.set({
      "Content-Type": "audio/mp3",
      "Content-Length": size,
    });

    res.sendFile(path);
  }
}
