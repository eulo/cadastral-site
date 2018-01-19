export default [
  //{ title: 'Introduction', content: '' },
  //{ title: 'API Key & Tokens', content: '' },
  { 
    title: 'Geocode', 
    content: '',
    routes: [
      { 
        title: '/geocode',
        subtitle: 'Find latlng by address',
        content: ''
      },
      {
        title: '/geocode/reverse',
        subtitle: 'Find address by latlng',
        content: ''
      }
    ],
  },
  { 
    title: 'Address', 
    content: '', 
    routes: [
      {
        title: '/address',
        subtitle: 'Get detailed information about address',
        content: ''
      },
      {
        title: '/address/autocomplete',
        subtitle: '',
        content: ''
      }
    ]
  }
]
