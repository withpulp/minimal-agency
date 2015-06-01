Meteor.publish('portfolio', function() {
  return Portfolio.find();
});
