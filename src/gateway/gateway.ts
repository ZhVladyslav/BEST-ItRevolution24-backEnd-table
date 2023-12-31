import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { table, updateTable } from 'src/constants/table';
import { IUpdateTable } from 'src/types/table.type';

@WebSocketGateway(3030, { cors: true })
export class Gateway implements OnModuleInit, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  newTableInfo() {
    this.server.emit('newTableInfo', table);
  }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`Connection: ${socket.id}`);

      socket.emit('tableInfo', table);
    });
  }

  handleDisconnect(client: any) {
    console.log(`Disconnection: ${client.id}`);
  }

  @SubscribeMessage('updateTable')
  getUpdateTable(@MessageBody() body: IUpdateTable[]) {
    updateTable(body);
    this.newTableInfo();
  }
}
