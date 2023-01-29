import Script from "next/script";
import "own-carousel.min.css";
import styles from "@styles/Sessions.module.css"
import sanityClient from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

export const Sessions = () => {
  return (
    <div className={styles.sessions}>
      <Script src="own-carousel.min.js" />
      <div className="own-carousel__container">
        <div className="own-carousel__outer">
          <div className="own-carousel">
            <div className="own-carosuel__item">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const home = await sanityClient.fetch(`*[_type == "home"]`);

  return {
    props: {
      home,
    },
  };
}
