Meteor.startup(function () {

  Fixtures.create(Meteor.users, function(api) {
    api.insert('admin', {
      email: 'admin@utool.com',
      username: 'admin',
      password: 'admin'
    });
  }, {
    insert: Accounts.createUser
  });

});
