var _deps = new Deps.Dependency;
Session.set('spin', false);

Template['quotes'].helpers({
    'quotes': function () {
        _deps.depend();
        var randomQuote = _.flatten(_.sample(Quotes.find().fetch(), 1));
        Session.set('spin', false);
        return randomQuote;
    },
    spin: function () {
        return Session.get('spin') ? 'fa-spin' : '';
    }
});

Template['quotes'].events({
    'click .refresh.quote': function () {
        _deps.changed();
    },
    'mouseenter .refresh.quote': function () {
        Session.set('spin', true);
    },
    'mouseleave .refresh.quote': function () {
        Session.set('spin', false);
    }
});
