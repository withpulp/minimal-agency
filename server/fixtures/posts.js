// The "||" notation doesn't work yet
//Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Meteor.startup(function () {

});

var now = new Date();

Fixtures.posts = [
	{
		title: 'The Diamond Age is Upon Us',
		excerpt: 'Given the acceleration of software engineering and the growing popularity of social coding platforms like GitHub, we\'re seeing the dawn of the age of self-sustainability.',
		createdAt: now,
		createdBy: 'Damir'
	},
	{
		title: 'Titles are Stupid',
		excerpt: 'While it is important to understand what others are doing, it\'s far more important to know that others are doing something. Titles lead to political jockeying and work-place stress.',
		createdAt: now,
		author: 'Husam'
	}
]
