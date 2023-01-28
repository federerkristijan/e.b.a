export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header'
    },
    {
      name: 'dualPic',
      type: 'image',
      title: 'Dual Picture',
      options: {
        metadata: [
          'blurhash',
          'lqip'
        ]
      }
    }
  ]
}
