Template['posts'].helpers({
    'limitedPosts': function () {
        return Posts.find({}, {limit: 2, sort: {createdAt: -1}});
    },
    'posts': function () {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});
