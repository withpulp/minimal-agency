Template.registerHelper('menuToggle', function () {
    return Session.get('menuToggle') ? 'navigator' : '';
});

Template.registerHelper('menuIcon', function() {
    return Session.get('menuToggle') ? 'fa fa-times' : 'fa fa-bars';
});

Template.registerHelper('root', function () {
    return Session.get('root');
});

Template.registerHelper('setClass', function () {
    return Session.get('setClass');
});

Template.registerHelper('formatDate', function (date) {
    return moment(date).format('MMMM Do, YYYY');
});