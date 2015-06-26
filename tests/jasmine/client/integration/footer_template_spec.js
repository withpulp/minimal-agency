'use strict';

describe('Footer template', function() {

	it('should show a contact list module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, div);

		expect($(div).find('.contact.module')[0]).toBeDefined();
	});

	it('should show a copyright with attribution', function() {
		var p = document.createElement('p'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, p);

		expect($(p).find('.copyright')[0]).toBeDefined();
	});
});
