export default{
  name: 'dominatrix',
  type: 'slug',
  title: 'Dominatrix',
  fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'bio',
        type: 'text',
        title: 'Bio'
      },
      {
        name: 'photo',
        type: 'image',
        title: 'Photo',
        options: {
          metadata: ['blurhash', 'lqip'],
        },
      },
      {
        name: 'url',
        type: 'url',
        title: 'URLs'
      }
  ]
}