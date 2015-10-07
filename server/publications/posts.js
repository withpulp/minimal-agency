Meteor.publishComposite('posts', {
    find: function () {
        return Posts.find();
    },
    children: [{
        find: function (post) {
            return Meteor.users.find({_id: post.createdBy}, {fields: {profile: 1}});
        }
    }]
});
Meteor.publishComposite('post', function (id) {
    check(id, String);
    return {
        find: function () {
            return Posts.find({_id: id});
        },
        children: [{
            find: function (post) {
                return [
                    Meteor.users.find({_id: post.createdBy}, {fields: {profile: 1}}),
                    Members.find({}, {fields: {thumb: 1, name: 1, title: 1, rank: 1}})
                ];
            }
        }]
    }
});
