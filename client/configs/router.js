Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'redirect'
});

Router.onBeforeAction('loading');
