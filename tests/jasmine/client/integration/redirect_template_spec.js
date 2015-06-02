'use strict';

describe('Redirect template', function() {

	it('should show a redirect module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.redirect);

		UI.insert(comp, div);

		expect($(div).find('.redirect.module')[0]).toBeDefined();
	});
});
