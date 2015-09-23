Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  title: 'Posts',
  link: {
    title: 'Posts'
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

Posts.attachSchema(new SimpleSchema({
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
  image: {
    type: String,
    label: 'Image',
    optional: true
  },
  body: orion.attribute('froala', {
    label: 'Body'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
