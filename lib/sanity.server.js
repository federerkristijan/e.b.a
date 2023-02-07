import { createClient } from "next-sanity";
import { sanityClient } from "@sanity/client";

export const previewClient = createClient({
  ...sanityClient,
  useCdn: false,
  token: ""
});

export const getClient = (preview) => (preview ? previewClient : sanityClient )
