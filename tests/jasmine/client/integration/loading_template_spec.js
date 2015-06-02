'use strict';

describe('Loading template', function() {

	it('should show a loading module', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.loading);

		UI.insert(comp, div);

		expect($(div).find('.loading.module')[0]).toBeDefined();
	});
});
