Meteor.publish('values', function() {
  return Values.find();
});
