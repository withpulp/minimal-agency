Template['cases'].helpers({
    'limitedCases': function() {
        return Cases.find({}, {limit: 2, sort: {createdAt: -1}});
    }
});
