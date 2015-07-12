Template['tools'].helpers({
  'limitedTools': function() {
	  return Tools.find({}, {limit: 2, sort: {createdAt: -1}});
  },
  'tools': function() {
	  return Tools.find({}, {sort: {createdAt: -1}});
  }
});
