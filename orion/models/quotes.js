Quotes = new orion.collection('quotes', {
  singularName: 'quote',
  pluralName: 'quotes',
  title: 'Quotes',
  link: {
    title: 'Quotes'
  },
  tabular: {
    columns: [
      {
        data: 'author',
        title: 'Author'
      },
      {
        data: 'quote',
        title: 'Quote'
      }
    ]
  }
});

Quotes.attachSchema(new SimpleSchema({
  author: {
    type: String,
    label: 'Author'
  },
  quote: {
    type: String,
    label: 'Quote'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
