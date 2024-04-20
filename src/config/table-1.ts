interface ITable1 {
  id: string;
  commandName: string;
  mainF: string;
  optionF: string;
  design: string;
  presentation: string;
  sum: string;
}

interface IUpdateTable1 extends Omit<ITable1, 'commandName' | 'sum'> {
}

class Table1 {
  private table: ITable1[] = [
    {
      id: '1',
      commandName: 'qwe',
      mainF: '0',
      optionF: '0',
      design: '0',
      presentation: '0',
      sum: '0',
    },
    {
      id: '2',
      commandName: 'dsadas',
      mainF: '0',
      optionF: '0',
      design: '0',
      presentation: '0',
      sum: '0',
    },
  ];

  public get() {
    return [...this.table];
  }

  public update(data: IUpdateTable1) {
    const findIndex = this.table.findIndex(item => item.id === data.id);
    if (findIndex === -1) return;
    if (this.table[findIndex].id !== data.id) return;

    //
    // UPDATE
    //

    const keysUpdate = Object.keys(data);

    keysUpdate.forEach(key => {
      if (key === 'id' || key === 'sum' || key === 'commandName') return;

      if (this.table[findIndex].hasOwnProperty(key)) {
        this.table[findIndex][key] = data[key];
      }
    });

    //
    // SUM
    //

    const keysSum = Object.keys(this.table[findIndex]);
    let countSum = 0;

    keysSum.forEach(key => {
      if (key === 'id' || key === 'sum' || key === 'commandName') return;

      if (this.table[findIndex].hasOwnProperty(key)) {
        countSum += +this.table[findIndex][key];
      }
    });

    this.table[findIndex].sum = countSum.toString();
  }
}

const table1 = new Table1();

export { ITable1, IUpdateTable1, table1 };