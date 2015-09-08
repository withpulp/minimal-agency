Template.registerHelper('menuToggle', function () {
    return Session.get('menuToggle') ? 'navigator' : '';
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