// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.root = [
  {
    mission: 'We Help Business Grow',
    supporting: '&#956;Tool (/mu:tool/) creates data-driven digital products and services that give brands a competitive edge.',
    segments: [
      {
        id: 'benefits',
        statement: 'Attract more customers with:',
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
        id: 'clients',
        statement: 'We\ve worked with:',
        clients: [
            {
              thumb: 'images/clients/pfizer.png'
            },
            {
              thumb: 'images/clients/jj.png'
            },
            {
              thumb: 'images/clients/sva.png'
            },
            {
              thumb: 'images/clients/thermofisher.png'
            },
            {
              thumb: 'images/clients/amc.png'
            },
            {
              thumb: 'images/clients/novo.png'
            }
        ]
      },
      {
        id: 'members',
        points: [
          {
            image: '/images/team/husam.jpg',
            name: 'Husam Machlovi',
            title: 'Strategy & Design'
          },
          {
            image: '/images/team/damir.jpg',
            name: 'Damir Vazgird',
            title: 'Technology'
          }
        ]
      },
      {
        id: 'tools',
        statement: 'Recent products:',
        points: [
            {
              title: 'Landing Page Builder',
              description: 'Create an effective landing page in minutes. Perfect for coming soon and newly launched products.'
            },
            {
              title: 'Blog',
              description: 'Minimal blogging platform designed for readability.'
            }
        ]
      }
    ]
  }
]
