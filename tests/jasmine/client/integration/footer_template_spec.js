'use strict';

describe('Footer template', function() {

	it('should show a menu module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, div);

		expect($(div).find('.menu.module')[0]).toBeDefined();
	});
});
