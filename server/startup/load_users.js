Meteor.startup(function () {
	if (Meteor.users.find().count() < 1) {

    Accounts.createUser({
      'username': 'admin',
      'password': 'admin',
			'email': 'admin@utool.com'
    });

		Accounts.createUser({
      'username': 'damir',
      'password': 'damir',
			'email': 'damir@utool.com'
    });

		Accounts.createUser({
      'username': 'husam',
      'password': 'husam',
			'email': 'husam@utool.com'
    });
  }
});
