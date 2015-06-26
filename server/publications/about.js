Meteor.publish('about', function() {
  return About.find();
});
