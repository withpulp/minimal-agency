Template.project.helpers({
    project: function() {
        return Projects.findOne(Router.current().params._id);
    }
});
