import { ITable, IUpdateTable } from 'src/types/table.type';

export const table: ITable[] = [
  {
    id: '1',
    commandName: 'First command',
    functional: '0',
    code: '0',
    design: '0',
    sum: '0',
  },
  {
    id: '2',
    commandName: 'Second command',
    functional: '0',
    code: '0',
    design: '0',
    sum: '0',
  },
];

export const updateTable = (updateTable: IUpdateTable[]) => {
  for (let i = 0; i < table.length; i++) {
    const indexUpdateTable = updateTable.findIndex((item) => item.id === table[i].id);

    table[i].functional = updateTable[indexUpdateTable].functional;
    table[i].code = updateTable[indexUpdateTable].code;
    table[i].design = updateTable[indexUpdateTable].design;

    table[i].sum = (+table[i].functional + +table[i].code + +table[i].design).toString();
  }
};
