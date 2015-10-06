Template['projects'].helpers({
    'limitedProjects': function () {
        return Projects.find({}, {limit: 2, sort: {createdAt: -1}});
    }
});
