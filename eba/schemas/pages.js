export default {
  name: 'pages',
  title: 'Pages',
  type: 'array',
  of: [
    {
      name: 'home',
      title: 'Home',
      type: 'document',
      fields: [
        {
          name: 'header',
          title: 'Header',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Dual Picture',
          type: 'image',
          options: {
            metadata: ['blurhash', 'lqip'],
            hotstpot: true
          },
        },
      ],
    },
  ],
}
