Template.registerHelper('menuToggle', function() {
  return Session.get('menuToggle') ? 'navigator' : '';
});

Template.registerHelper('root', function() {
  return Session.get('root');
});
