'use strict';

describe('Footer template', function() {

	it('should show a mailchimp module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, div);

		expect($(div).find('.mailchimp.module')[0]).toBeDefined();
	});
});
