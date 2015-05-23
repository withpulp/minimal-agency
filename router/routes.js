Router.route('/', {
	name: 'root'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/about', {
	name: 'about'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/services', {
	name: 'services'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/tools', {
	name: 'tools'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/clients', {
	name: 'clients'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
