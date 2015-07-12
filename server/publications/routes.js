Meteor.publish('routes', function() {
  return Routes.find();
});
