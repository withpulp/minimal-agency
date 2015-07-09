'use strict';

describe('Footer template', function() {

	it('should show a mailchimp subscription module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, div);

		expect($(div).find('.mailchimp.module')[0]).toBeDefined();
	});

	it('should show a quotes module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, div);

		expect($(div).find('.quotes.module')[0]).toBeDefined();
	});

	it('should show a contacts list module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, div);

		expect($(div).find('.contacts.module')[0]).toBeDefined();
	});

	it('should show a copyright with attribution', function() {
		var p = document.createElement('p'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, p);

		expect($(p).find('.copyright')[0]).toBeDefined();
	});
});
