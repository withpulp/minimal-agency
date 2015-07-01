Router.route('/', {
	name: 'root',
	data: function() {
		return [
			Benefits.find(),
			Figures.find(),
			Clients.find(),
			Members.find(),
			Quotes.find(),
			Contacts.find()
		]
	},
	waitOn: function () {
		return [
			Meteor.subscribe('benefits'),
			Meteor.subscribe('figures'),
			Meteor.subscribe('clients'),
			Meteor.subscribe('members'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
		]
	},
	action: function () {
		if (this.ready())
			this.render('root');
		else
			this.render('loading');
	}
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/about', {
	name: 'about',
	data: function() {
		return [
			Values.find(),
	    Members.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
			Meteor.subscribe('values'),
      Meteor.subscribe('members'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('about');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/services', {
	name: 'services',
	data: function() {
    return Services.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('services'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('services');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/tools', {
	name: 'tools',
	data: function() {
    return Portfolio.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('portfolio'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('tools');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
