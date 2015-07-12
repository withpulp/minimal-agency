Router.route('/', {
	name: 'root',
	data: function() {
		return [
			Benefits.find(),
			Figures.find(),
			Clients.find(),
			Members.find(),
			Tools.find(),
			Posts.find(),
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
			Meteor.subscribe('tools'),
			Meteor.subscribe('posts'),
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

Router.route('/work', {
	name: 'work',
	data: function() {
		return [
			Projects.find(),
	    Tools.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
			Meteor.subscribe('projects'),
      Meteor.subscribe('tools'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('work');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/tools', {
	name: 'products',
	data: function() {
		return [
	    Tools.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
      Meteor.subscribe('tools'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('products');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/tools/:_id', {
  name: 'product',
  data: function() {
    return [
			Tools.findOne(this.params._id),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
		return [
			Meteor.subscribe('tool', this.params._id),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
		]
  },
  action: function () {
    if (this.ready())
      this.render('product');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/blog/', {
	name: 'blog',
	data: function() {
		return [
	    Posts.find(),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
    return [
      Meteor.subscribe('posts'),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
    ]
  },
  action: function () {
    if (this.ready())
      this.render('blog');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/blog/:_id', {
  name: 'blogPost',
  data: function() {
    return [
			Posts.findOne(this.params._id),
			Quotes.find(),
			Contacts.find()
		]
  },
  waitOn: function () {
		return [
			Meteor.subscribe('post', this.params._id),
			Meteor.subscribe('quotes'),
			Meteor.subscribe('contacts')
		]
  },
  action: function () {
    if (this.ready())
      this.render('blogPost');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
