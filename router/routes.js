Router.route('/', {
	name: 'root'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
