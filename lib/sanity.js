import { sanityConfig } from './config'
import { PortableText as PortableTextComponent } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";
import { definePreview } from 'next-sanity/preview';

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max');

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);

// export const usePreviewSubscription =
//   createPreviewSubscriptionHook(sanityConfig)
export const usePreview = definePreview(sanityConfig)

// export default function PreviewDocumentsCount() {
//   const data = usePreview(null, query)
//   return <DocumentsCount data={data} />
// }
