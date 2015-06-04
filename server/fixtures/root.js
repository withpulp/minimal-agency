// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.root = [
  {
    mission: 'We Help Businesses Grow',
    supporting: 'with data-driven design and development',
    segments: [
      {
        id: 'benefits',
        statement: 'Attract more customers with more',
        points: [
            {
              text: 'Growth Opportunities'
            },
            {
              text: 'Trial Signups',
            },
            {
              text: 'Leads',
            },
            {
              text: 'Sales and Purchases',
            },
            {
              text: 'Click-throughs',
            }
        ]
      },
      {
        id: 'figures',
        statement: 'Here is our recent track record',
        points: [
            {
              date: '2015 May',
              metric: 'Purchases',
              percent: '25%',
              client: 'Wholesale E-commerce Company'
            },
            {
              date: '2015 May',
              metric: 'Signups',
              percent: '30%',
              client: 'Wholesale E-commerce Company'
            },
            {
              date: '2015 March',
              metric: 'Signups',
              percent: '40%',
              client: 'Yoga Instructor'
            },
            {
              date: '2015 February',
              metric: 'Signups',
              percent: '40%',
              client: 'Product Strategy Consultant'
            },
            {
              date: '2015 January',
              metric: 'Donations',
              percent: '15%',
              client: 'Non-profit Organization'
            }
        ]
      },
      {
        id: 'members',
        points: [
          {
            image: 'http://placehold.it/150x150',
            name: 'Husam Machlovi',
            title: 'Strategy & Design'
          },
          {
            image: 'http://placehold.it/150x150',
            name: 'Damir Vazgird',
            title: 'Technology'
          }
        ]
      },
      {
        id: 'clients',
        statement: 'We\ve worked with:',
        clients: [
            {
              thumb: 'http://placehold.it/150x150'
            },
            {
              thumb: 'http://placehold.it/150x150'
            },
            {
              thumb: 'http://placehold.it/150x150'
            }
        ]
      },
      {
        id: 'tools',
        statement: 'Recent products:',
        points: [
            {
              title: 'title',
              description: 'description'
            },
            {
              title: 'title',
              description: 'description'
            },
            {
              title: 'title',
              description: 'description'
            }
        ]
      }
    ]
  }
]
