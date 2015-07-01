Meteor.startup(function () {
  Benefits._ensureIndex({'userId': 1});
  Clients._ensureIndex({'userId': 1});
  Contacts._ensureIndex({'userId': 1});
  Figures._ensureIndex({'userId': 1});
  Members._ensureIndex({'userId': 1});
  Tools._ensureIndex({'userId': 1});
  Posts._ensureIndex({'userId': 1});
  Quotes._ensureIndex({'userId': 1});
  Services._ensureIndex({'userId': 1});
  Values._ensureIndex({'userId': 1});
});
