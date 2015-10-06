Meteor.publish('services', function () {
    return Services.find();
});
