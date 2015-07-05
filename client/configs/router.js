Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'redirect'
});

Router.plugin('ensureSignedIn', {
  only: ['admin']
});

Router.onBeforeAction('loading');
