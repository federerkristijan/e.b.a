import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: 'ekdtjzbe',
  dataset: 'product',
  useCdn: false,
  apiVersion: '2023-01-28'
})
