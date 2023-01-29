import Script from "next/script";
import styles from "@/styles/Sessions.module.css";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Sessions = ({ sessions }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  console.log('sessions ', sessions );

  return (
    <div className={styles.sessions}>
          <Carousel>
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
