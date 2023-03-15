import { Module } from "npm:@nestjs/common@9.0.0";
import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
