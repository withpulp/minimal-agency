Template['menu'].helpers({
  'routes': function() {
	  return Routes.find();
  }
});

Template['menu'].events({
  'click .navigation .route': function() {
    Session.set('menuToggle', !Session.get('menuToggle'));
  }
});
