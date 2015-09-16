Template.post.helpers({
    post: function () {
        return Posts.findOne(Router.current().params._id);
    },
    next: function () {
        var postId = Router.current().params._id,
            posts = Posts.find({}, {sort: {createdAt: -1}}).fetch();

        for (var i = 0; i < posts.length; ++i) {
            if (posts[i]._id === postId) {
                var current = posts[i],
                    index = posts.indexOf(current);

                index++;

                if (index === posts.length) {
                    // condition to return no posts message
                } else {
                	var nextPost = Posts.findOne(posts[index]._id);
                    return nextPost;
                }
            }
        }
    }
});
