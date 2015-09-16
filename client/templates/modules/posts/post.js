//var postId = Router.current().params._id,
//	posts = Posts.find().fetch();
//
//console.log(postId);

//for(var i = 0; i < posts.length; ++i) {
//	if (posts[i]._id === postId) {
//		var current = posts[i],
//			index = posts.indexOf(current);
//
//		index++;
//
//		var nextPost = Posts.findOne(posts[index]._id);
//
//		//if (index === posts.length) {
//		//	e.preventDefault();
//		//} else {
//		//	var nextPost = Posts.findOne(posts[index]._id);
//		//}
//	} else {
//		e.preventDefault();
//	}
//}

Template.post.helpers({
    post: function () {
        return Posts.findOne(Router.current().params._id);
    },
    next: function () {
        var current = Router.current().params._id;
        console.log(current);

        return Posts.find({createdAt: {$gt: current.createdAt}}, {sort: {createdAt: 1}, limit:1});

    }
});
