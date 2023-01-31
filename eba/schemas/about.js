export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        metadata: ['blurhash', 'lqip'],
      },
    },
    {
      name: 'url',
      title: 'URLs',
      type: 'url'
    },

  ]
}
