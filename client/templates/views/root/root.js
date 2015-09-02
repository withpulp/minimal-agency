Template.root.rendered = function () {
    Session.set('root', true);
    Session.set('setClass', '');

    var introTypedA = orion.dictionary.get('root.introTypedA', 'We maximize conversions.'),
        introTypedB = orion.dictionary.get('root.introTypedB', 'We boost business.'),
        introTypedC = orion.dictionary.get('root.introTypedC', 'We build software.');

    $('.typed').typed({
        strings: [introTypedA, introTypedB, introTypedC],
        typeSpeed: 25,
        backSpeed: 25
    });
}
