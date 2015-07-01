Router.route('/', {
	name: 'root',
	data: function() {
		return [
			Root.find(),
			Benefits.find(),
			Quotes.find(),
			Contacts.find()
		]
	},
	waitOn: function () {
		return [
			Meteor.subscribe('root'),
			Meteor.subscribe('benefits'),
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
    return About.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('about'),
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

Router.route('/clients', {
	name: 'clients',
	data: function() {
    return Clients.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('clients'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('clients');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
