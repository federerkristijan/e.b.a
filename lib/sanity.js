import { sanityConfig } from './config'
import { PortableText as PortableTextComponent } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";
import { createPreviewSubscriptionHook } from 'next-sanity'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlFor = (source) =>
  createImageUrlBuilder(sanityClient).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig)
