Meteor.publish('members', function() {
  return Members.find();
});
