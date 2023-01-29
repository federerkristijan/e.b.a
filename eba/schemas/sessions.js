export default {
  name: 'sessions',
  type: 'document',
  title: 'Sessions',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image'
        }
      ]
    }
  ]
}
