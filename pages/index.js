import Head from "next/head";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
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
            <div key={item._id}>
              <Image
                src={urlFor(item.image).width(379).url('https://cdn.sanity.io/images/ekdtjzbe/product/370da73b31cacf478a864bc39e659fcdd7833a17-379x290.png')}
                alt={item.header}
                width={379}
                height={290}
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
