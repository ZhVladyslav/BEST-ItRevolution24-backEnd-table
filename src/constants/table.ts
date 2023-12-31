export const table = [
  {
    id: '1',
    commandName: 'First command',
    functional: 0,
    code: 0,
    design: 0,
    sum: 0,
  },
  {
    id: '2',
    commandName: 'Second command',
    functional: 0,
    code: 0,
    design: 0,
    sum: 0,
  },
];

const calcSum = ({ id }: { id: string }) => {
  const index = table.findIndex((item) => item.id === id);

  const calcTable = table[index];
  calcTable.sum = +calcTable.functional + +calcTable.code + +calcTable.design;
};

export const updateTable = ({
  id,
  param,
  value,
}: {
  id: string;
  param: 'code' | 'functional' | 'design';
  value: string;
}) => {
  const index = table.findIndex((item) => item.id === id);

  const updateTable = table[index];
  updateTable[param] = +value;

  calcSum({ id });
};
