import sanityClient from "@sanity/client";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: "ekdtjzbe",
  dataset: "product",
  useCdn: true,
  apiVersion: "2023-01-28",
});

export const urlFor = (source) =>
  createImageUrlBuilder(sanityClient).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
