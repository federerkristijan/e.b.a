import { createClient } from "next-sanity";

export const previewClient = createClient({
  ...sanityClient,
  useCdn: false,
  token: ""
});

export const getClient = (preview) => (preview ? previewClient : sanityClient )
