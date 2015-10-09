Meteor.startup(function () {
    Benefits._ensureIndex({'createdBy': 1});
    Clients._ensureIndex({'createdBy': 1});
    Contacts._ensureIndex({'createdBy': 1});
    Figures._ensureIndex({'createdBy': 1});
    Members._ensureIndex({'createdBy': 1});
    Posts._ensureIndex({'createdBy': 1});
    Processes._ensureIndex({'createdBy': 1});
    Projects._ensureIndex({'createdBy': 1});
    Quotes._ensureIndex({'createdBy': 1});
    Services._ensureIndex({'createdBy': 1});
    Tools._ensureIndex({'createdBy': 1});
    Values._ensureIndex({'createdBy': 1});
});
