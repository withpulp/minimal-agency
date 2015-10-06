Routes = new orion.collection('routes', {
    singularName: 'route',
    pluralName: 'routes',
    title: 'Routes',
    link: {
        title: 'Routes'
    },
    tabular: {
        columns: [
            {
                data: 'route',
                title: 'Route'
            }
        ]
    }
});

Routes.attachSchema(new SimpleSchema({
    route: {
        type: String,
        label: 'Route'
    },
    image: {
        type: String,
        label: 'Image'
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));
