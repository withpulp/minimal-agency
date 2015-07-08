Template.post.helpers({
	post: function() {
		return Posts.findOne(Router.current().params._id);
	}
});
