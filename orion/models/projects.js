Projects = new orion.collection('projects', {
    singularName: 'project',
    pluralName: 'projects',
    title: 'Projects',
    link: {
        title: 'Projects'
    },
    tabular: {
        columns: [
            {
                data: 'client',
                title: 'Client'
            },
            {
                data: 'title',
                title: 'Title'
            },
            {
                data: 'subtitle',
                title: 'Sub Title'
            },
            {
                data: 'date',
                title: 'Date'
            }
        ]
    }
});

Projects.attachSchema(new SimpleSchema({
    client: {
        type: String,
        label: 'Client'
    },
    title: {
        type: String,
        label: 'Title',
        max: 100
    },
    subtitle: {
        type: String,
        label: 'Sub Title',
        max: 350
    },
    date: {
        type: String,
        label: 'Date'
    },
    excerpt: {
        type: String,
        label: 'Description',
        max: 500
    },
    body: orion.attribute('froala', {
        label: 'Body'
    }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));
