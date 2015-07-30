// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.processes = [
  // move this leading statement to dict
  //header: 'We take an iterative approach to design and development that empowers minimal time to market.',
  {
    rank: '1',
    process: 'Learn',
    description: 'Leveraging the best business requirements framework, we understand the business need.'
  },
  {
    rank: '2',
    process: 'Iterate',
    description: 'We define our hypothesis and create a functional prototype to test it.'
  },
  {
    rank: '3',
    process: 'Launch',
    description: 'We launch the prototype, gather feedback and re-visit step 2.'
  }
]
