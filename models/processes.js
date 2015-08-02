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
        data: 'title',
        title: 'Title'
      },
      {
        data: 'description',
        title: 'Description'
      }
    ]
  }
});

Processes.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  description: {
    type: String,
    label: 'Description'
  },
  'stages.$.stage': {
    type: String,
    label: 'Stage'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
