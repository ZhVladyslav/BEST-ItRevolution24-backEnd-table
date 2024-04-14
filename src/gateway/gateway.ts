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
import { IUpdateTable, IUpdateTableGame } from 'src/types/table.type';
import { tableGame, updateTableGame } from '../constants/table-game';

@WebSocketGateway(3030, { cors: true })
export class Gateway implements OnModuleInit, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  newTableInfo() {
    this.server.emit('newTableInfo', table);
    this.server.emit('newTableGameInfo', tableGame);
  }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`Connection: ${socket.id}`);

      socket.emit('tableInfo', table);
      socket.emit('tableGameInfo', tableGame);
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

  @SubscribeMessage('updateTableGame')
  getUpdateTableGame(@MessageBody() body: IUpdateTableGame[]) {
    updateTableGame(body);
    this.newTableInfo();
  }
}
