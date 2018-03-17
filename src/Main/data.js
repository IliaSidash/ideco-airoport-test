const depart = {
  headers: [
    {
      id: 1,
      text: 'Номер рейса',
    },
    {
      id: 2,
      text: 'Город вылета',
    },
    {
      id: 3,
      text: 'Тип самолета',
    },
    {
      id: 4,
      text: 'Время',
    },
    {
      id: 5,
      text: 'Фактическое время',
    },
    {
      id: 6,
      text: 'Статус',
    },
  ],
  flights: [
    {
      id: 1,
      number: 123,
      airoport: 'VKO',
      aircraft: 'AIRBUS A320',
      time: 1521193476000,
      departTime: 1521207876000,
      status: 'arrived',
    },
    {
      id: 2,
      number: 213,
      airoport: 'BCN',
      aircraft: 'AIRBUS A320',
      time: 1521193476000,
      departTime: 1521207876000,
      status: 'arrived',
    },
  ],
};

const arrival = {
  headers: [
    {
      id: 1,
      text: 'Номер рейса',
    },
    {
      id: 2,
      text: 'Город прилета',
    },
    {
      id: 3,
      text: 'Тип самолета',
    },
    {
      id: 4,
      text: 'Время',
    },
    {
      id: 5,
      text: 'Фактическое время',
    },
    {
      id: 6,
      text: 'Статус',
    },
  ],
  flights: [
    {
      id: 1,
      number: 123,
      airoport: 'VKO',
      aircraft: 'AIRBUS A320',
      time: 1521193476000,
      departTime: 1521207876000,
      status: 'arrived',
    },
    {
      id: 2,
      number: 213,
      airoport: 'BCN',
      aircraft: 'AIRBUS A320',
      time: 1521193476000,
      departTime: 1521207876000,
      status: 'arrived',
    },
  ],
};

export { depart, arrival };
