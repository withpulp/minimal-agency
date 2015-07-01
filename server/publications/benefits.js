Meteor.publish('benefits', function() {
  return Benefits.find();
});
