// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.processes = [
  // move this leading statement to dict
  //header: 'We take an iterative approach to design and development that empowers minimal time to market.',
  {
    rank: '1',
    process: 'Measuring the Forces',
    description: 'We define the job that a user needs to get done by analyzing the qualitative and quantitive datasets surrounding the job. These datasets are the forces that bear down on the problem. They provide the context for the form the product will take.'
  },
  {
    rank: '2',
    process: 'Outcome Definition',
    description: 'We define what successful execution looks like. This metric becomes our validator and guides all priorities.'
  },
  {
    rank: '3',
    process: 'Prototype Development',
    description: 'We produce a prototype and a test plan. Our objective is to shatter all assumptions and cull the prototype down to it\'s true form.'
  },
  {
    rank: '4',
    process: 'Deployment and Testing',
    description: 'We ship the prototype, monitor data using a suite of tools and iterate appropriately.'
  }
]
