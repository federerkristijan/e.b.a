import Script from "next/script";
import styles from "@/styles/Sessions.module.css";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Next from "../../styles/assets/arrow-right.png"
import Prev from "../../styles/assets/left-arrow.png"

const Sessions = ({ sessions }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  console.log('sessions ', sessions );

  const nextArrow = () => {(onClickHandler, hasNext, label) => hasNext && (
    <button type="button" onClick={onClickHandler} title={label}>{Next}</button>
  )};

  const prevArrow = () => {(onClickHandler, hasPrev, label) => hasPrev && (
    <button type="button" onClick={onClickHandler} title={label}>{Prev}</button>
  )};

  return (
    <div className={styles.sessions}>
          <Carousel
            showStatus={false}
            renderArrowNext={nextArrow}
            renderArrowPrev={prevArrow}
          >
      {sessions &&
        sessions.map((item) => (
            <div key={item._id} className={styles.image}>
              <ul>
                <li>
                  <Image
                    src={urlFor(item.image).width(499).url()}
                    alt={item.header}
                    width={499}
                    height={338}
                    className={styles.image}
                  />
                </li>
              </ul>
            </div>
        ))}
          </Carousel>
    </div>
  );
};

export async function getStaticProps() {
  const sessions = await sanityClient.fetch(`*[_type == "sessions"]`);

  return {
    props: {
      sessions,
    },
  };
}

export default Sessions;
