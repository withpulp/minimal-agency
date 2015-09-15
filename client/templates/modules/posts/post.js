Template.post.helpers({
	post: function() {
		return Posts.findOne(Router.current().params._id);
	},
	next: function() {
		//return Posts.findOne(Router.current().params._id);
		var postId = Router.current().params._id,
			posts = Posts.find().fetch();

		for(var i = 0; i < posts.length; ++i) {
			if (posts[i]._id === postId) {
				var current = posts[i],
					index = posts.indexOf(current);

				index++;

				var nextPost = Posts.findOne(posts[index]._id);

				//if (index === posts.length) {
				//	e.preventDefault();
				//} else {
				//	var nextPost = Posts.findOne(posts[index]._id);
				//}
			} else {
				e.preventDefault();
			}
		}
		return nextPost;
	}
});
