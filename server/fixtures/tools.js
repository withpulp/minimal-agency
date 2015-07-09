// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

var admin = Meteor.users.findOne(this.userId),
    now = new Date();

Fixtures.tools = [
	{
		title: 'Landing Page Builder',
		excerpt: 'Create an effective landing page in minutes. Perfect for coming soon and newly launched products.',
		body: 'Create an effective landing page in minutes. Perfect for coming soon and newly launched products.',
		createdAt: now,
		createdBy: admin
	},
	{
		title: 'Blog',
		excerpt: 'Minimal blogging platform designed for readability.',
		body: 'Minimal blogging platform designed for readability.',
		createdAt: now,
		createdBy: admin
	}
]
