import Script from "next/script";
import styles from "@/styles/Sessions.module.css"
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Sessions = ({ sessions }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

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
  const sessions = await sanityClient.fetch(`*[_type == "sessions"]`);

  return {
    props: {
      sessions,
    },
  };
}

export default Sessions;
