Tools = new orion.collection('tools', {
  singularName: 'tool',
  pluralName: 'tools',
  title: 'Tools',
  link: {
    title: 'Tools'
  },
  tabular: {
    columns: [
      {
        data: 'title',
        title: 'Title'
      },
      {
        data: 'excerpt',
        title: 'Excerpt'
      },
      orion.attributeColumn('createdBy', 'createdBy', 'Author'),
      orion.attributeColumn('createdAt', 'createdAt', 'Date')
    ]
  }
});

Tools.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 100
  },
  excerpt: {
    type: String,
    label: 'Excerpt',
    max: 500
  },
  body: orion.attribute('summernote', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

Tools.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
