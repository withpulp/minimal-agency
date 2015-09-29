Template['mobileMenu'].events({
  'click .mobile-nav-trigger': function() {
    var hello = console.log('hello');
    Session.set('showMobileNav', hello);
    Session.get('showMobileNav');
  }
});
