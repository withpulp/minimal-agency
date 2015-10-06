Figures = new orion.collection('figures', {
    singularName: 'figure',
    pluralName: 'figures',
    title: 'Figures',
    link: {
        title: 'Figures'
    },
    tabular: {
        columns: [
            {
                data: 'date',
                title: 'Date'
            }
        ]
    }
});

Figures.attachSchema(new SimpleSchema({
    date: {
        type: String,
        label: 'Date'
    },
    'records.$.metric': {
        type: String,
        label: 'Metric'
    },
    'records.$.percent': {
        type: String,
        label: 'Percent'
    },
    'records.$.client': {
        type: String,
        label: 'Client'
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));
