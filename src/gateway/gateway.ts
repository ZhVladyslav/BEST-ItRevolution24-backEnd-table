import { OnModuleInit } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { table, updateTable } from 'src/constants/table';
import { IUpdateTable } from 'src/types/table.type';

@WebSocketGateway(3030, { cors: true })
export class Gateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  newTableInfo() {
    this.server.emit('newTableInfo', table);
  }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`Connected: ${socket.id}`);

      socket.emit('tableInfo', table);
    });
  }

  @SubscribeMessage('updateTable')
  getUpdateTable(@MessageBody() body: IUpdateTable[]) {
    updateTable(body);
    this.newTableInfo();
  }
}
