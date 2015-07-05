Fixtures.create(Meteor.users, function(api) {

	api.insert('admin', {
		email: 'admin@utool.com',
		username: 'admin',
		password: 'admin'
	});

	api.insert('damir', {
		email: 'damir@utool.com',
		username: 'damir',
		password: 'damir'
	});

	api.insert('husam', {
		email: 'husam@utool.com',
		username: 'husam',
		password: 'husam'
	});

}, {
	insert: Accounts.createUser
});
