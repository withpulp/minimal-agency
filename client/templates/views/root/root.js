Template.root.rendered = function() {
  Session.set('root', true);
  Session.set('setClass', '');

  $(".typed").typed({
  strings: ["We maximize conversions.", "We boost business.", "We build software."],
  typeSpeed: 25
});
}
