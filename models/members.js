Members = new orion.collection('members', {
  singularName: 'member',
  pluralName: 'members',
  title: 'Members',
  link: {
    title: 'Members'
  },
  tabular: {
    columns: [
      {
        data: 'name',
        title: 'Name'
      },
      {
        data: 'title',
        title: 'Title'
      },
      {
        data: 'rank',
        title: 'Rank'
      }
    ]
  }
});

Members.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  image: {
    type: String,
    label: 'Image'
  },
  title: {
    type: String,
    label: 'Title'
  },
  rank: {
    type: String,
    label: 'Rank'
  },
  summary: orion.attribute('froala', {
    label: 'Summary'
  }),
  'social.$.url': {
    type: String,
    label: 'Social Media URL'
  },
  'social.$.icon': {
    type: String,
    label: 'Social Media Icon'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
