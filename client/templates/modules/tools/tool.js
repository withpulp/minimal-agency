Template.tool.helpers({
    tool: function () {
        return Tools.findOne(Router.current().params._id);
    }
});
