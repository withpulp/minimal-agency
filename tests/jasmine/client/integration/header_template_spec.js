'use strict';

describe('Header template', function() {

	it('should show a logo image', function() {
		var link = document.createElement('a'),
		    comp = UI.render(Template.header);

		UI.insert(comp, link);

		expect($(link).find('.logo')[0]).toBeDefined();
	});
});
