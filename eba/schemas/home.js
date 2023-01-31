export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Dual Picture',
      type: 'image',
      options: {
        metadata: [
          'blurhash',
          'lqip'
        ]
      }
    }
  ]
}
