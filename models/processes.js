Processes = new orion.collection('processes', {
  singularName: 'process',
  pluralName: 'processes',
  title: 'Processes',
  link: {
    title: 'Processes'
  },
  tabular: {
    columns: [
      {
        data: 'rank',
        title: 'Rank'
      },
      {
        data: 'process',
        title: 'Process'
      },
      {
        data: 'description',
        title: 'Description'
      }
    ]
  }
});

Processes.attachSchema(new SimpleSchema({
  rank: {
    type: Number,
    label: 'Rank'
  },
  process: {
    type: String,
    label: 'Process'
  },
  description: {
    type: String,
    label: 'Description'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
