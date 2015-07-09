Benefits = new orion.collection('benefits', {
  singularName: 'benefit',
  pluralName: 'benefits',
  title: 'Benefits',
  link: {
    title: 'Benefits'
  },
  tabular: {
    columns: [
      {
        data: 'benefit',
        title: 'Benefit'
      }
    ]
  }
});

Benefits.attachSchema(new SimpleSchema({
  benefit: {
    type: String,
    label: 'Benefit'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
