import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import sanityClient from "../lib/client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ home }) {

  const imageProps = useNextSanityImage(sanityClient, home.image)

  return (
    <>
      <Head>
        <title>Exclusive BDSM Adventures</title>
        <meta name="description" content="Exclusive BDSM Adventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {home && (
          <div key={home._id}>
            <h1>{home.header}</h1>
            <Img
              {...imageProps}
              style={{ width: '100%', height: 'auto' }}
              sizes="(max-width: 800px) 100vw, 800px"
              placeholder="blur"
              blurDataURL={home.image.metadata.lqip}
            />
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const home = await sanityClient.fetch(`*[_type == "home"]`);

  return {
    props: {
      home
    }
  }
}
