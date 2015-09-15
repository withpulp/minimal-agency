Template.post.helpers({
	post: function() {
		return Posts.findOne(Router.current().params._id);
	},
	next: function() {
		var postId = Router.current().params._id,
			posts = Posts.find().fetch();

		for(var i = 0; i < posts.length; ++i) {
			if (posts[i]._id === postId) {
				var current = posts[i],
					index = posts.indexOf(current);

				index++;


				if (index === posts.length) {
					e.preventDefault();
				} else {
					var nextPostId = posts[index]._id;
					return Posts.findOne(nextPostId);
				}
			} else {
				e.preventDefault();
			}
		}
	}
});
