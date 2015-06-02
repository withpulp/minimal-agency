Portfolio = new Mongo.Collection('portfolio');

Portfolio.allow({
  insert: function (userId, doc) {
    return (userId && doc.ownerId === userId);
  },
  update: function (userId, doc, fields, modifier) {
    return doc.ownerId === userId;
  },
  remove: function (userId, doc) {
    return doc.ownerId === userId;
  },
  fetch: ['ownerId']
});

Portfolio.helpers({
  portfolio: function() {
    return Portfolio.find();
  }
});
