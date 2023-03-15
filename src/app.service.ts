import { Injectable } from "npm:@nestjs/common@9.0.0";

@Injectable()
export class AppService {
  getFile(path: string) {
    return Deno.open(path);
  }

  async getFileSize(path: string) {
    return (await Deno.stat(path)).size;
  }
}
