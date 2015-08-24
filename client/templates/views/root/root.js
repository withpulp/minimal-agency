Template.root.rendered = function() {
  Session.set('root', true);
  Session.set('setClass', '');

  $(".typed").typed({
  strings: ["We maximize converions.", "We boost business.", "We build software."],
  typeSpeed: 0
});
}
