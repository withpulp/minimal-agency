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

        Roles.addUserToRoles(Meteor.users.find({username: 'admin'}).fetch()[0]._id, 'admin');

        Accounts.createUser({
            username: 'damir',
            password: 'damir123',
            email: 'damir@utool.com',
            profile: {
                name: 'Damir Vazgird',
                thumb: '/images/team/damir.jpg',
                title: 'Development',
                rank: 'Partner'
            }
        });

        Roles.addUserToRoles(Meteor.users.find({username: 'damir'}).fetch()[0]._id, 'admin');

        Accounts.createUser({
            username: 'husam',
            password: 'husam123',
            email: 'husam@utool.com',
            profile: {
                name: 'Husam Machlovi',
                thumb: '/images/team/husam.jpg',
                title: 'Design',
                rank: 'Partner'
            }
        });

        Roles.addUserToRoles(Meteor.users.find({username: 'husam'}).fetch()[0]._id, 'admin');
    }
});
