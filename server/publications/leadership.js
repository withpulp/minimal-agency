Meteor.publish('leadership', function() {
  return Leadership.find();
});
