Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('postsWithUsers', {
  find: function() {
    return Posts.find();
  },
  children: [{
    find: function(post) {
      return Meteor.users.find({
        _id: post.createdBy
      }, {
        fields: { profile: 1 }
      });
    }
  }]
});

Meteor.publish('postWithUser', function(postId) {
  check(postId, String);
  return {
    find: function() {
      return Posts.find({ _id: postId });
    },
    children: [{
      find: function(post) {
        return Meteor.users.find({
          _id: post.createdBy
        }, {
          fields: { profile: 1 }
        });
      }
    }]
  }
});
