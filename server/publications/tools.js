Meteor.publish('tools', function () {
    return Tools.find();
});

Meteor.publish('tool', function (id) {
    check(id, String)
    return Tools.find(id);
});
