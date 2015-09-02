// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

var admin = Meteor.users.findOne(this.userId),
    now = new Date();

Fixtures.projects = [
    {
        client: 'Client Y',
        title: 'Project X',
        date: 'May 2015',
        excerpt: 'Given the acceleration of software engineering and the growing popularity of social coding platforms like GitHub, we\'re seeing the dawn of the age of self-sustainability.',
        body: 'Given the acceleration of software engineering and the growing popularity of social coding platforms like GitHub, we\'re seeing the dawn of the age of self-sustainability.',
        createdAt: now,
        createdBy: admin
    },
    {
        client: 'Client Y',
        title: 'Project X',
        date: 'May 2015',
        excerpt: 'Given the acceleration of software engineering and the growing popularity of social coding platforms like GitHub, we\'re seeing the dawn of the age of self-sustainability.',
        body: 'Given the acceleration of software engineering and the growing popularity of social coding platforms like GitHub, we\'re seeing the dawn of the age of self-sustainability.',
        createdAt: now,
        createdBy: admin
    }
];
