export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          titel: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'display',
      title: 'Display as',
      type: 'string',
      description: 'How should we display these images?',
      options: {
        list: [
          {title: 'Stacked on top of eachother', value: 'stacked'},
          {title: 'In-line', value: 'inline'},
          {title: 'Carousel', value: 'carousel'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'zoom',
      title: 'Zoom enabled',
      type: 'boolean',
      description: 'Should we enable zooming of images?'
    },
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
    },
    prepare(selection) {
      const { images, image } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: 'Alt text: $[image.alt}',
        media: image
      }
    }
  }
}
