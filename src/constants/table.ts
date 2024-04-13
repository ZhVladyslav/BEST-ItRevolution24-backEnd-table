import { ITable, IUpdateTable } from 'src/types/table.type';

export const table: ITable[] = [
  {
    id: '1',
    commandName: 'Vimjoyers',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '2',
    commandName: 'H@sh_stealer$',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '3',
    commandName: 'ElectricCats',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '4',
    commandName: 'Команда 228',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '5',
    commandName: 'Skull Code',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '6',
    commandName: '4eliки',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '7',
    commandName: 'WebWolfs',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '8',
    commandName: 'Мехмати з Вомбату',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
  {
    id: '9',
    commandName: 'MMM',
    mainF: '0',
    optionF: '0',
    design: '0',
    presentation: '0',
    sum: '0',
  },
];

export const updateTable = (updateTable: IUpdateTable[]) => {
  for (let i = 0; i < table.length; i++) {
    const indexUpdateTable = updateTable.findIndex((item) => item.id === table[i].id);

    table[i].mainF = updateTable[indexUpdateTable].mainF;
    table[i].optionF = updateTable[indexUpdateTable].optionF;
    table[i].design = updateTable[indexUpdateTable].design;
    table[i].presentation = updateTable[indexUpdateTable].presentation;

    table[i].sum = (
      +table[i].mainF +
      +table[i].optionF +
      +table[i].design +
      +table[i].presentation
    ).toString();
  }
};
