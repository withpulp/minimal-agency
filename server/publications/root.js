Meteor.publish('root', function() {
  return Root.find();
});
