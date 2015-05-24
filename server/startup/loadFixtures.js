function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  if (Projects.find().count() === 0) {
    loadFixture(Fixtures['projects'], Projects);
  }

  if (Clients.find().count() === 0) {
    loadFixture(Fixtures['clients'], Clients);
  }

  if (Clients.find().count() === 0) {
    loadFixture(Fixtures['services'], Services);
  }
});
