Meteor.publish('projects', function() {
  return Projects.find();
});

Meteor.publish('project', function(id) {
  check(id, String)
  return Projects.find(id);
});
