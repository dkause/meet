const mockData = [
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-19T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-19T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-20T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-20T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-21T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-21T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-21T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-22T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-23T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-25T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-25T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-25T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-26T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-26T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-26T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-27T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-27T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-27T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200528T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-28T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-28T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-28T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200529T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-29T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-29T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-05-29T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200530T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-05-30T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-05-30T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-05-30T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200601T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-01T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-01T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-01T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200602T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-02T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-02T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-02T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200603T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-03T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-03T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-03T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200604T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-04T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-04T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-04T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200605T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-05T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-05T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-05T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200606T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-06T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-06T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-06T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200608T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-08T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-08T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-08T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200609T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-09T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-09T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-09T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200610T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-10T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-10T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-10T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200611T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-11T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-11T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-11T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200612T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-12T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-12T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-12T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200613T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-13T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-13T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-13T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200615T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-15T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-15T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-15T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200616T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-16T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-16T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-16T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200617T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-17T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-17T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-17T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200618T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MThUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-18T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-18T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-18T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200619T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-19T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-19T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-19T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200620T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-20T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-20T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-20T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-22T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-22T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-23T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-23T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200624T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-24T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-24T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-24T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200625T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-25T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-25T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-25T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200626T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-26T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-26T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-26T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200627T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-27T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-27T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-27T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187232047578000"',
    id: '013qoq4ns44cam7q4hqcf13eab_20200628T230000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA2MjhUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:05:49.000Z',
    updated: '2020-07-01T15:07:03.789Z',
    summary: 'jQuery and More',
    description:
      'Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.',
    location: 'Santiago, Santiago Metropolitan Region, Chile',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-29T01:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-29T02:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '013qoq4ns44cam7q4hqcf13eab',
    originalStartTime: {
      dateTime: '2020-06-29T01:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '013qoq4ns44cam7q4hqcf13eab@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/mqx-jyfg-uoc',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/mqx-jyfg-uoc',
          label: 'meet.google.com/mqx-jyfg-uoc'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/mqx-jyfg-uoc?pin=9759553023326',
          pin: '9759553023326'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081618734',
          label: '+49 40 8081618734',
          pin: '678190650'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'mqx-jyfg-uoc'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181159875584000"',
    id: '3qtd6uscq4tsi6gc7nmmtpqlct_20200629T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:14:30.000Z',
    updated: '2020-05-27T11:45:37.792Z',
    summary: 'React is Fun',
    description:
      'Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ',
    location: 'Berlin, Germany',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-29T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-29T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3qtd6uscq4tsi6gc7nmmtpqlct',
    originalStartTime: {
      dateTime: '2020-06-29T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3qtd6uscq4tsi6gc7nmmtpqlct@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187234500432000"',
    id: '65jg7h2f96klim15fie75mj1a1_20200629T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMDA2MjlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:26:57.000Z',
    updated: '2020-07-01T15:27:30.216Z',
    summary: 'AngularJS Workshop',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Cape Town, South Africa',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-29T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-29T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '65jg7h2f96klim15fie75mj1a1',
    originalStartTime: {
      dateTime: '2020-06-29T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '65jg7h2f96klim15fie75mj1a1@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/ctp-pwtc-pmq',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/ctp-pwtc-pmq',
          label: 'meet.google.com/ctp-pwtc-pmq'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/ctp-pwtc-pmq?pin=2824243883315',
          pin: '2824243883315'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-30-300195220',
          label: '+49 30 300195220',
          pin: '987090091'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'ctp-pwtc-pmq'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187221858184000"',
    id: '3gi3kabkm3bua5lq3jhscc8s4c_20200629T200000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMDA2MjlUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T13:23:24.000Z',
    updated: '2020-07-01T13:42:09.092Z',
    summary: 'Intro to AngularJS-Remote',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ',
    location: 'New York, NY, USA',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-29T22:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-29T23:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3gi3kabkm3bua5lq3jhscc8s4c',
    originalStartTime: {
      dateTime: '2020-06-29T22:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3gi3kabkm3bua5lq3jhscc8s4c@google.com',
    sequence: 2,
    hangoutLink: 'https://meet.google.com/xcb-hfjb-psv',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/xcb-hfjb-psv',
          label: 'meet.google.com/xcb-hfjb-psv'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/xcb-hfjb-psv?pin=4442155852117',
          pin: '4442155852117'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081617300',
          label: '+49 40 8081617300',
          pin: '657955248'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'xcb-hfjb-psv'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187221506816000"',
    id: '48m09le389vijbqfs2mcr6i87q_20200630T070000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T13:39:01.000Z',
    updated: '2020-07-01T13:39:13.408Z',
    summary: 'Node Gang',
    description:
      "We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",
    location: 'Sydney NSW, Australia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-30T09:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-30T10:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '48m09le389vijbqfs2mcr6i87q',
    originalStartTime: {
      dateTime: '2020-06-30T09:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '48m09le389vijbqfs2mcr6i87q@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/wdc-wutt-tji',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/wdc-wutt-tji',
          label: 'meet.google.com/wdc-wutt-tji'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/wdc-wutt-tji?pin=3796108774207',
          pin: '3796108774207'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081618974',
          label: '+49 40 8081618974',
          pin: '170634768'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'wdc-wutt-tji'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187232532588000"',
    id: '20c51je3q99mnolr1rp06dt9jd_20200630T120000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MjBjNTFqZTNxOTltbm9scjFycDA2ZHQ5amRfMjAyMDA2MzBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T14:17:12.000Z',
    updated: '2020-07-01T15:11:06.294Z',
    summary: 'Use jQuery, bring in interactivity easily ',
    description:
      'Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.',
    location: 'Mumbai, Maharashtra, India',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-30T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-30T15:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '20c51je3q99mnolr1rp06dt9jd',
    originalStartTime: {
      dateTime: '2020-06-30T14:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '20c51je3q99mnolr1rp06dt9jd@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/nns-htdr-ijk',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/nns-htdr-ijk',
          label: 'meet.google.com/nns-htdr-ijk'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/nns-htdr-ijk?pin=9302146320475',
          pin: '9302146320475'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081618430',
          label: '+49 40 8081618430',
          pin: '810644618'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'nns-htdr-ijk'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3181161784712000"',
    id: '4eahs9ghkhrvkld72hogu9ph3e_20200630T140000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-05-19T19:17:46.000Z',
    updated: '2020-05-27T12:01:32.356Z',
    summary: 'Learn JavaScript',
    description:
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
    location: 'London, UK',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-30T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-30T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
    originalStartTime: {
      dateTime: '2020-06-30T16:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
    sequence: 0,
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187238088812000"',
    id: '7e4k9oop7bb86svd42vui37k6o_20200630T150000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=N2U0azlvb3A3YmI4NnN2ZDQydnVpMzdrNm9fMjAyMDA2MzBUMTUwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:56:05.000Z',
    updated: '2020-07-01T15:57:24.406Z',
    summary: 'Angular Moscow',
    description:
      'Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\n\nJoin us to get introduced to this wonderful framework and dive deep into its features.',
    location: 'Moscow, Russia',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-30T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-30T18:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '7e4k9oop7bb86svd42vui37k6o',
    originalStartTime: {
      dateTime: '2020-06-30T17:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '7e4k9oop7bb86svd42vui37k6o@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/fip-gdth-tdu',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/fip-gdth-tdu',
          label: 'meet.google.com/fip-gdth-tdu'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/fip-gdth-tdu?pin=1369000914291',
          pin: '1369000914291'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081616684',
          label: '+49 40 8081616684',
          pin: '516915292'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'fip-gdth-tdu'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187232583216000"',
    id: '3m5n6mcl1aqrdsg6k5vkr6to5p_20200630T163000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA2MzBUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T13:54:32.000Z',
    updated: '2020-07-01T15:11:31.608Z',
    summary: 'Build Your First App with JavaScript',
    description:
      "You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",
    location: 'Amsterdam, Netherlands',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-06-30T18:30:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-06-30T19:30:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '3m5n6mcl1aqrdsg6k5vkr6to5p',
    originalStartTime: {
      dateTime: '2020-06-30T18:30:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '3m5n6mcl1aqrdsg6k5vkr6to5p@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/vxc-jcvs-juv',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/vxc-jcvs-juv',
          label: 'meet.google.com/vxc-jcvs-juv'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/vxc-jcvs-juv?pin=7178471106778',
          pin: '7178471106778'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081619886',
          label: '+49 40 8081619886',
          pin: '257304091'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'vxc-jcvs-juv'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187232047578000"',
    id: '013qoq4ns44cam7q4hqcf13eab_20200630T230000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMDA2MzBUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T15:05:49.000Z',
    updated: '2020-07-01T15:07:03.789Z',
    summary: 'jQuery and More',
    description:
      'Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.',
    location: 'Santiago, Santiago Metropolitan Region, Chile',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-07-01T01:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-07-01T02:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '013qoq4ns44cam7q4hqcf13eab',
    originalStartTime: {
      dateTime: '2020-07-01T01:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '013qoq4ns44cam7q4hqcf13eab@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/mqx-jyfg-uoc',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/mqx-jyfg-uoc',
          label: 'meet.google.com/mqx-jyfg-uoc'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/mqx-jyfg-uoc?pin=9759553023326',
          pin: '9759553023326'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081618734',
          label: '+49 40 8081618734',
          pin: '678190650'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'mqx-jyfg-uoc'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  },
  {
    kind: 'calendar#event',
    etag: '"3187222416180000"',
    id: '6co0ojl0l0j0rbh3g56vlc2s9i_20200701T010000Z',
    status: 'confirmed',
    htmlLink:
      'https://www.google.com/calendar/event?eid=NmNvMG9qbDBsMGowcmJoM2c1NnZsYzJzOWlfMjAyMDA3MDFUMDEwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
    created: '2020-07-01T13:44:15.000Z',
    updated: '2020-07-01T13:46:48.090Z',
    summary: 'React California',
    description:
      'React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nReact California is a non-profit organization offering free training sessions to React enthusiasts every Wednesday and Friday.\n\nJoin us in our free React training sessions and give your career a new direction.',
    location: 'California, USA',
    creator: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    organizer: {
      email: 'fullstackwebdev@careerfoundry.com',
      self: true
    },
    start: {
      dateTime: '2020-07-01T03:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    end: {
      dateTime: '2020-07-01T04:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    recurringEventId: '6co0ojl0l0j0rbh3g56vlc2s9i',
    originalStartTime: {
      dateTime: '2020-07-01T03:00:00+02:00',
      timeZone: 'Europe/Berlin'
    },
    iCalUID: '6co0ojl0l0j0rbh3g56vlc2s9i@google.com',
    sequence: 1,
    hangoutLink: 'https://meet.google.com/imt-kabh-cib',
    conferenceData: {
      entryPoints: [
        {
          entryPointType: 'video',
          uri: 'https://meet.google.com/imt-kabh-cib',
          label: 'meet.google.com/imt-kabh-cib'
        },
        {
          entryPointType: 'more',
          uri: 'https://tel.meet/imt-kabh-cib?pin=8711708481601',
          pin: '8711708481601'
        },
        {
          regionCode: 'DE',
          entryPointType: 'phone',
          uri: 'tel:+49-40-8081618688',
          label: '+49 40 8081618688',
          pin: '752695860'
        }
      ],
      conferenceSolution: {
        key: {
          type: 'hangoutsMeet'
        },
        name: 'Google Meet',
        iconUri:
          'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
      },
      conferenceId: 'imt-kabh-cib'
    },
    reminders: {
      useDefault: true
    },
    eventType: 'default'
  }
]

export default mockData