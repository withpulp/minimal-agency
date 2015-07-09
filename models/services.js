Services = new orion.collection('services', {
  singularName: 'service',
  pluralName: 'services',
  title: 'Services',
  link: {
    title: 'Services'
  },
  tabular: {
    columns: [
      {
        data: 'service',
        title: 'Service'
      },
      {
        data: 'description',
        title: 'Description'
      }
    ]
  }
});

Services.attachSchema(new SimpleSchema({
  service: {
    type: String,
    label: 'Service'
  },
  description: {
    type: String,
    label: 'Description'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
