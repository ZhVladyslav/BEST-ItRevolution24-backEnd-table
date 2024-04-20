import { Module } from '@nestjs/common';
import { SocketTable1Service } from './socket-table-1-service';

@Module({
  providers: [SocketTable1Service],
})
export class AppModule {
}
