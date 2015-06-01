Router.route('/', {
	name: 'root',
	data: function() {
		return Root.find();
	},
	waitOn: function () {
		return [
			Meteor.subscribe('root')
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
    return Members.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('members')
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
      Meteor.subscribe('services')
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
      Meteor.subscribe('portfolio')
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
      Meteor.subscribe('clients')
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
