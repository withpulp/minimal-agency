'use strict';

describe('Footer template', function() {

	it('should show an endmatter with contact list', function() {
		var div = document.createElement('div'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, div);

		expect($(div).find('.endmatter .contact')[0]).toBeDefined();
	});

	it('should show a copyright with attribution', function() {
		var p = document.createElement('p'),
		    comp = UI.render(Template.footer);

		UI.insert(comp, p);

		expect($(p).find('.copyright')[0]).toBeDefined();
	});
});
