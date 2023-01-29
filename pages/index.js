import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ home }) {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
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
                height={1024}
                className={styles.image}
              />
            </div>
          ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const home = await sanityClient.fetch(`*[_type == "home"]`);

  return {
    props: {
      home,
    },
  };
}
