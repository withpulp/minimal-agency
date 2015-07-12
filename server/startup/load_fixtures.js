Meteor.startup(function () {

  function loadFixture(fixtures, collection) {
    var i;

    for (i = 0; i < fixtures.length; i+= 1) {
      collection.insert(fixtures[i]);
    }
  }

  // @TODO: loop this

  if (Benefits.find().count() === 0) {
    loadFixture(Fixtures['benefits'], Benefits);
  }

  if (Clients.find().count() === 0) {
    loadFixture(Fixtures['clients'], Clients);
  }

  if (Contacts.find().count() === 0) {
    loadFixture(Fixtures['contacts'], Contacts);
  }

  if (Figures.find().count() === 0) {
    loadFixture(Fixtures['figures'], Figures);
  }

  if (Members.find().count() === 0) {
    loadFixture(Fixtures['members'], Members);
  }

  if (Posts.find().count() === 0) {
    loadFixture(Fixtures['posts'], Posts);
  }

  if (Projects.find().count() === 0) {
    loadFixture(Fixtures['projects'], Projects);
  }

  if (Processes.find().count() === 0) {
    loadFixture(Fixtures['processes'], Processes);
  }

  if (Quotes.find().count() === 0) {
    loadFixture(Fixtures['quotes'], Quotes);
  }

  if (Routes.find().count() === 0) {
    loadFixture(Fixtures['routes'], Routes);
  }

  if (Services.find().count() === 0) {
    loadFixture(Fixtures['services'], Services);
  }

  if (Tools.find().count() === 0) {
    loadFixture(Fixtures['tools'], Tools);
  }

  if (Values.find().count() === 0) {
    loadFixture(Fixtures['values'], Values);
  }
});
