import { ITable, ITableGame, IUpdateTable, IUpdateTableGame } from 'src/types/table.type';

export const tableGame: ITableGame[] = [
  {
    id: '1',
    commandName: 'МК',
    mainF: '0',
    optionF: '0',
    design: '0',
    voice: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '2',
    commandName: 'VNTU_1111',
    mainF: '0',
    optionF: '0',
    design: '0',
    voice: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '3',
    commandName: 'BugРяний Dev',
    mainF: '0',
    optionF: '0',
    design: '0',
    voice: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '4',
    commandName: 'Noctua sapiens',
    mainF: '0',
    optionF: '0',
    design: '0',
    voice: '0',
    presentation: '0',
    sum: '0',
  },
];

export const updateTableGame = (updateTable: IUpdateTableGame[]) => {
  for (let i = 0; i < tableGame.length; i++) {
    const indexUpdateTable = updateTable.findIndex((item) => item.id === tableGame[i].id);

    tableGame[i].mainF = updateTable[indexUpdateTable].mainF;
    tableGame[i].optionF = updateTable[indexUpdateTable].optionF;
    tableGame[i].design = updateTable[indexUpdateTable].design;
    tableGame[i].voice = updateTable[indexUpdateTable].voice;
    tableGame[i].presentation = updateTable[indexUpdateTable].presentation;

    tableGame[i].sum = (
      +tableGame[i].mainF +
      +tableGame[i].optionF +
      +tableGame[i].design +
      +tableGame[i].voice +
      +tableGame[i].presentation
    ).toString();
  }
};
