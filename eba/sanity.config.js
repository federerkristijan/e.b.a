import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'E.B.A',

  projectId: 'ekdtjzbe',
  dataset: 'product',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
