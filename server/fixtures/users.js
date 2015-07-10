Fixtures.insert(Meteor.users, 'admin', {
  email: 'admin@utool.com',
  username: 'admin',
  password: 'admin',
	profile: {
	  name: 'Admin'
  }
}, Accounts.createUser);
