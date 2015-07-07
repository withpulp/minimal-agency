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
      orion.attributeColumn('summernote', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Author'),
      orion.attributeColumn('createdAt', 'createdAt', 'Date')
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  excerpt: {
    type: String,
    label: 'Excerpt'
  },
  body: orion.attribute('summernote', {
    label: 'Content'
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  },
  posts: function() {
    return Posts.find();
  }
});
