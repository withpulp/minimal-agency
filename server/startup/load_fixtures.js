function loadFixture(fixtures, collection) {
  var i;

  for (i = 0; i < fixtures.length; i+= 1) {
    //collection.remove({ });
    collection.insert(fixtures[i]);
  }
}

Meteor.startup(function () {
  // @TODO: loop this

  if (Portfolio.find().count() === 0) {
    loadFixture(Fixtures['portfolio'], Portfolio);
  }

  if (Benefits.find().count() === 0) {
    loadFixture(Fixtures['benefits'], Benefits);
  }

  if (Figures.find().count() === 0) {
    loadFixture(Fixtures['figures'], Figures);
  }

  if (Clients.find().count() === 0) {
    loadFixture(Fixtures['clients'], Clients);
  }

  if (Services.find().count() === 0) {
    loadFixture(Fixtures['services'], Services);
  }

  if (About.find().count() === 0) {
    loadFixture(Fixtures['about'], About);
  }

  if (Root.find().count() === 0) {
    loadFixture(Fixtures['root'], Root);
  }

  if (Process.find().count() === 0) {
    loadFixture(Fixtures['process'], Process);
  }

  if (Contacts.find().count() === 0) {
    loadFixture(Fixtures['contacts'], Contacts);
  }

  if (Quotes.find().count() === 0) {
    loadFixture(Fixtures['quotes'], Quotes);
  }

});
