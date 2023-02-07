import { definePreview } from "next-sanity/preview";
import { sanityConfig } from "@/lib/config";

const usePreview = definePreview({sanityConfig})

export default function PreviewDocumentsCount() {
  const data = usePreview(null, query)
  return <DocumentsCount data={data} />
}

