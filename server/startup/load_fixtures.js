function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  if (Portfolio.find().count() === 0) {
    loadFixture(Fixtures['portfolio'], Portfolio);
  }

  if (Clients.find().count() === 0) {
    loadFixture(Fixtures['clients'], Clients);
  }

  if (Services.find().count() === 0) {
    loadFixture(Fixtures['services'], Services);
  }

  if (Members.find().count() === 0) {
    loadFixture(Fixtures['members'], Members);
  }

  if (Root.find().count() === 0) {
    loadFixture(Fixtures['root'], Root);
  }

  if (Process.find().count() === 0) {
    loadFixture(Fixtures['process'], Process);
  }

  if (Footer.find().count() === 0) {
    loadFixture(Fixtures['footer'], Footer);
  }

});
