Meteor.publish('tools', function() {
  return Tools.find();
});
