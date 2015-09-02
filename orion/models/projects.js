Projects = new orion.collection('projects', {
  singularName: 'project',
  pluralName: 'projects',
  title: 'Projects',
  link: {
    title: 'Projects'
  },
  tabular: {
    columns: [
      {
        data: 'client',
        title: 'Client'
      },
      {
        data: 'title',
        title: 'Title'
      },
      {
        data: 'date',
        title: 'Date'
      }
    ]
  }
});

Projects.attachSchema(new SimpleSchema({
  client: {
    type: String,
    label: 'Client'
  },
  title: {
    type: String,
    label: 'Title'
  },
  date: {
    type: String,
    label: 'Date'
  },
  description: {
    type: String,
    label: 'Description'
  },
  logo: {
    type: String,
    label: 'Logo'
  },
  image: {
    type: String,
    label: 'Image'
  },
  'roles.$.role': {
    type: String,
    label: 'Role'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
