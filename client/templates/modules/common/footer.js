Template['footer'].events({
    'click .toggle.menu.button': function(e) {
        e.preventDefault();

        Session.set('menuToggle', !Session.get('menuToggle'));
    }
});