Template.registerHelper('menuToggle', function() {
  return Session.get('menuToggle') ? 'navigator' : '';
});

Template.registerHelper('root', function() {
  return Session.get('root');
});

Template.registerHelper('about', function() {
  return Session.get('about') ? 'about' : '';
});
