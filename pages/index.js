import Head from "next/head";
import Image from "next/image";
import {lazy} from 'react'
import { Inter } from "@next/font/google";
import {PreviewSuspense} from 'next-sanity/preview'

import { getClient, overlayDrafts } from "@/lib/sanity.server";
import { indexQuery } from '@/lib/queries';
import styles from "@/styles/Home.module.css";
import { usePreview } from "@/lib/sanity";
import PreviewDocumentsCount from "@/components/PreviewDocumentsCount";

const inter = Inter({ subsets: ["latin"] });

export const PreviewDocumentCount = lazy(() => import('/components/PreviewDocumentsCount'))

export default function Home({ preview, data: initialData }) {
  const data = usePreview(null, indexQuery);

  if (preview) {
    return (
      <PreviewSuspense fallback={<DocumentsCount data={data} />} >
         <PreviewDocumentsCount />
      </PreviewSuspense>
    )
  }

  return (
    <div>
      <Head>
        <title>Exclusive BDSM Adventures</title>
        <meta name="description" content="Exclusive BDSM Adventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {home &&
          home.map((item) => (
            <div className={styles.home} key={item._id}>
              <Image
                src={urlFor(item.image)
                  .width(1440)
                  .url(
                    "https://cdn.sanity.io/images/ekdtjzbe/product/dccd9ef661fa769f0e26904461a6cb8e9a9072c3-1440x1024.png"
                  )}
                alt={item.header}
                width={1440}
                height={720}
                className={styles.image}
              />
            </div>
          ))}
      </main>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const home = overlayDrafts(await getClient(preview).fetch(indexQuery));

  return {
    props: {
      home, preview
    },
  };
}
