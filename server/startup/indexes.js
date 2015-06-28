Meteor.startup(function () {
  About._ensureIndex({'userId': 1});
  Clients._ensureIndex({'userId': 1});
  Contacts._ensureIndex({'userId': 1});
  Portfolio._ensureIndex({'userId': 1});
  Process._ensureIndex({'userId': 1});
  Quotes._ensureIndex({'userId': 1});
  Root._ensureIndex({'userId': 1});
  Services._ensureIndex({'userId': 1});
});
