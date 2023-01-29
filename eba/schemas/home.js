export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
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
