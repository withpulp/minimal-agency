Values = new orion.collection('values', {
    singularName: 'value',
    pluralName: 'values',
    title: 'Values',
    link: {
        title: 'Values'
    },
    tabular: {
        columns: [
            {
                data: 'rank',
                title: 'Rank'
            },
            {
                data: 'value',
                title: 'Value'
            },
            {
                data: 'definition',
                title: 'Definition'
            }
        ]
    }
});

Values.attachSchema(new SimpleSchema({
    rank: {
        type: String,
        label: 'Rank'
    },
    value: {
        type: String,
        label: 'Value'
    },
    definition: {
        type: String,
        label: 'Definition'
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));
