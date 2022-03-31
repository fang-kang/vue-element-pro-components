module.exports = [
  [
    'link',
    {
      rel: 'icon',
      href: '/logo.png'
    }
  ],
  [
    'link',
    {
      rel: 'manifest',
      href: '/logo.png'
    }
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      href: '/logo.png'
    }
  ],
  [
    'meta',
    {
      'http-quiv': 'pragma',
      cotent: 'no-cache'
    }
  ],
  [
    'meta',
    {
      'http-quiv': 'pragma',
      cotent: 'no-cache,must-revalidate'
    }
  ],
  [
    'meta',
    {
      'http-quiv': 'expires',
      cotent: '0'
    }
  ],
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  [
    'link',
    {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css'
    }
  ],
  [
    'link',
    {
      rel: 'stylesheet',
      href: 'styles/index.css'
    }
  ]
]
