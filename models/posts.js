Posts = new orion.collection('posts', {
  singularName: orion.helpers.getTranslation('posts.singularName'),
  pluralName: orion.helpers.getTranslation('posts.pluralName'),
  title: orion.helpers.getTranslation('posts.title'),
  link: {
    title: orion.helpers.getTranslation('posts.title')
  },
  tabular: {
    columns: [
      {
        data: 'title',
        title: orion.helpers.getTranslation('posts.schema.title')
      },
      orion.attributeColumn('file', 'image', orion.helpers.getTranslation('posts.schema.image')),
      orion.attributeColumn('summernote', 'body', orion.helpers.getTranslation('posts.schema.body')),
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('posts.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('posts.schema.createdAt'))
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: orion.helpers.getTranslation('posts.schema.title')
  },
  image: orion.attribute('file', {
      label: orion.helpers.getTranslation('posts.schema.image'), // We use this function to make i18n work in autoform
      optional: true
  }),
  body: orion.attribute('summernote', {
      label: orion.helpers.getTranslation('posts.schema.body') // We use this function to make i18n work in autoform
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
