Meteor.publish('process', function() {
  return Process.find();
});
