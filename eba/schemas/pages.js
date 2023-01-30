export default {
  name: 'pages',
  title: 'Pages',
  type: 'array',
  of: [
    {
      name: 'home',
      type: 'document',
      title: 'Home',
      fields: [
        {
          name: 'header',
          type: 'string',
          title: 'Header',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Dual Picture',
          options: {
            metadata: ['blurhash', 'lqip'],
            hotstpot: true
          },
        },
      ],
    },
  ],
}
