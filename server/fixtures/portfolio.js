// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.portfolio = [
  {
    client: 'Project X',
    title: '',
    logo: '/images/projects/logos/projectx.png',
    roles: [
      {
        role: 'Product strategy'
      },
      {
        role: 'Analysis'
      },
      {
        role: 'Design'
      },
      {
        role: 'Development'
      }
    ],
    description: 'It started with a conversation. Business X needed customers. Fast..',
    image: '/images/projects/projectximage.png',
    date: 'May 2015',
    meta: {
        createdAt: 'test',
        description: 'test',
        keywords: 'test'
    }
  }
];
