Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'redirect',
    trackPageView: true
});

Router.onBeforeAction('loading');
Router.onBeforeAction('dataNotFound', {only: 'case'});

Router._filters = {
    resetScroll: function () {
        var scrollTo = window.currentScroll || 0;
        $('body').scrollTop(scrollTo);
    }
};

var filters = Router._filters;

Router.onAfterAction(filters.resetScroll);

