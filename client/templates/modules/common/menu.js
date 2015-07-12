Template['menu'].helpers({
  'routes': function() {
	  return Routes.find();
  }
});

Template['menu'].events({
  'click .navigation .cell': function() {
    Session.set('menuToggle', !Session.get('menuToggle'));
  }
});
