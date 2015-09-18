var _deps = new Deps.Dependency;

Template['quotes'].helpers({
  'quotes': function() {
    _deps.depend();
    var randomQuote = _.flatten(_.sample(Quotes.find().fetch(), 1));
    return randomQuote;
  }
});

Template['quotes'].events({
  'click .refresh.quote': function() {
    _deps.changed();
  }
});
