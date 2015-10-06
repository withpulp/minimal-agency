Meteor.publish('contacts', function () {
    return Contacts.find();
});
