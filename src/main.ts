import {
  ExpressAdapter,
  NestExpressApplication,
} from "npm:@nestjs/platform-express@9.0.0";
import { NestFactory } from "npm:@nestjs/core@9.0.0";
import { AppModule } from "./app.module.ts";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
