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

  if (Members.find().count() === 0) {
    loadFixture(Fixtures['members'], Members);
  }

  if (Tools.find().count() === 0) {
    loadFixture(Fixtures['tools'], Tools);
  }

  if (Services.find().count() === 0) {
    loadFixture(Fixtures['services'], Services);
  }

  if (Values.find().count() === 0) {
    loadFixture(Fixtures['values'], Values);
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
