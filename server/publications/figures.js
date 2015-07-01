Meteor.publish('figures', function() {
  return Figures.find();
});
