import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { IUpdateTable1, table1 } from 'src/config/table-1';

@WebSocketGateway(3030, { cors: true })
export class SocketTable1Service implements OnModuleInit, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      socket.emit('get-table-1', table1.get());
    });
  }

  handleDisconnect(client: any) {
    console.log(`Disconnection: ${client.id}`);
  }

  @SubscribeMessage('update-table-1')
  getUpdateTable(@MessageBody() body: IUpdateTable1) {
    table1.update(body);
    this.server.emit('get-new-table-1', table1.get());
  }
}
