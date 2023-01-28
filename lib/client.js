import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.NEXT_SANITY_PROJECTID,
  dataset: 'product',
  useCdn: true,
})
