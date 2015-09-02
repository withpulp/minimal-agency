Template.case.helpers({
    case: function() {
        return Cases.findOne(Router.current().params._id);
    }
});
