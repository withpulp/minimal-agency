Contacts = new orion.collection('contacts', {
  singularName: 'contact',
  pluralName: 'contacts',
  title: 'Contacts',
  link: {
    title: 'Contacts'
  },
  tabular: {
    columns: [
      {
        data: 'email',
        title: 'Email'
      }
    ]
  }
});

Contacts.attachSchema(new SimpleSchema({
  email: {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
