import { OnModuleInit } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { table, updateTable } from 'src/constants/table';

@WebSocketGateway(3030)
export class Gateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  updateTableEmit() {
    this.server.emit('updateTable', table);
  }

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(`Connected: ${socket.id}`);

      socket.emit('tableInfo', table);
    });
  }

  @SubscribeMessage('updateCode')
  updateCode(@MessageBody() body: { id: string; value: string }) {
    updateTable({ id: body.id, param: 'code', value: body.value });

    this.updateTableEmit();
  }

  @SubscribeMessage('updateFunctional')
  updateFunctional(@MessageBody() body: { id: string; value: string }) {
    updateTable({ id: body.id, param: 'functional', value: body.value });

    this.updateTableEmit();
  }

  @SubscribeMessage('updateDesign')
  updateDesign(@MessageBody() body: { id: string; value: string }) {
    updateTable({ id: body.id, param: 'design', value: body.value });

    this.updateTableEmit();
  }
}
