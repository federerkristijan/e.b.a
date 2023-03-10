export default{
  name: 'dominatrix',
  title: 'Dominatrix',
  type: 'document',
  fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name'
        },
        description: 'Generate me'
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
        title: 'Link',
        type: 'url',
      },
  ]
}
