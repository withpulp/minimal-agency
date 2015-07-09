Meteor.publish('processes', function() {
  return Processes.find();
});
