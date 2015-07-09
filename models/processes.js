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
