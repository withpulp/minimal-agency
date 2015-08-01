// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.processes = [
  // move this leading statement to dict
  {
    title: 'Understand, Build, Iterate',
    description: 'We strongly believe the only way to know if something works is to test it. This means prototypes are crucial for success. This frame forms our simple strategy for software development.',
    processes: [
      {
        statement: 'Understand the need and surrounding environmental factors'
      },
      {
        statement: 'Build a testable, minimally viable prototype that may best address need'
      },
      {
        statement: 'Iterate over prototype until expected outcome is realized'
      }
    ]
  }
]
