Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('post', function(id) {
  check(id, String)
  return Posts.find(id);
});
