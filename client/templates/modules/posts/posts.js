Template['posts'].helpers({
  'limitedPosts': function() {
	  return Posts.find({}, {limit: 2, sort: {createdAt: -1}});
  }
});
