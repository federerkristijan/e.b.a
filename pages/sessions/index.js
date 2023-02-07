import { useRouter } from "next/router";
import styles from "@/styles/Sessions.module.css";
import sanityClient from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Next from "../../styles/assets/arrow-right.png";
import Prev from "../../styles/assets/left-arrow.png";
import Link from "next/link";

const Sessions = ({ sessions }) => {
  const router = useRouter();
  const { pid } = router.query;
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  console.log("sessions ", sessions);

  const nextArrow = () => {
    (onClickHandler, hasNext, label) =>
      hasNext && (
        <button type="button" onClick={onClickHandler} title={label}>
          {Next}
        </button>
      );
  };

  const prevArrow = () => {
    (onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button type="button" onClick={onClickHandler} title={label}>
          {Prev}
        </button>
      );
  };

  return (
    <div className={styles.sessions}>
      <Carousel
        showStatus={false}
        // renderArrowNext={nextArrow}
        // renderArrowPrev={prevArrow}
      >
        {sessions &&
          sessions.map((session) => (
            <div key={session._id} className={styles.image}>
              <ul>
                <li>
                  <Link href="/">
                    <h2>{session.title}</h2>
                    <Image
                      src={urlFor(session.image).width(499).url()}
                      alt={session.header}
                      width={499}
                      height={338}
                      className={styles.image}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

// export const getStaticPaths = async () => {};

export async function getStaticProps() {
  const sessions = await sanityClient.fetch(`*[_type == "sessions"]`);

  return {
    props: {
      sessions,
    },
  };
}

export default Sessions;
