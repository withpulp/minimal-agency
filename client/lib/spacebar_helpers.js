Template.registerHelper('menuToggle', function() {
  return Session.get('menuToggle') ? 'navigator' : '';
});

Template.registerHelper('admin', function() {
  return Session.get('admin');
});
