Meteor.startup(function () {
	if (Meteor.users.find().count() < 1) {

    Accounts.createUser({
      'username': 'admin',
      'password': 'admin',
			'email': 'admin@utool.com'
    });

		Roles.addUsersToRoles(Meteor.users.find({
      username: 'admin'
    }).fetch(), ['admin']);

		Accounts.createUser({
      'username': 'damir',
      'password': 'damir',
			'email': 'damir@utool.com'
    });

		Roles.addUsersToRoles(Meteor.users.find({
      username: 'damir'
    }).fetch(), ['admin']);

		Accounts.createUser({
      'username': 'husam',
      'password': 'husam',
			'email': 'husam@utool.com'
    });
		
		Roles.addUsersToRoles(Meteor.users.find({
      username: 'husam'
    }).fetch(), ['admin']);
  }
});
