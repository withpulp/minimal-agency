Meteor.startup(function () {
	if (Meteor.users.find().count() < 1) {

    Accounts.createUser({
      username: 'admin',
      password: 'admin',
			email: 'admin@utool.com',
			profile: {
			  name: 'Admin'
      }
    });
  }
});
