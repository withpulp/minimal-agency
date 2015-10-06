Clients = new orion.collection('clients', {
    singularName: 'client',
    pluralName: 'clients',
    title: 'Clients',
    link: {
        title: 'Clients'
    },
    tabular: {
        columns: [
            {
                data: 'client',
                title: 'client'
            },
            {
                data: 'date',
                title: 'date'
            }
        ]
    }
});

Clients.attachSchema(new SimpleSchema({
    client: {
        type: String,
        label: 'Client'
    },
    logo: {
        type: String,
        label: 'Logo'
    },
    url: {
        type: String,
        label: 'URL'
    },
    date: {
        type: String,
        label: 'Date'
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));
