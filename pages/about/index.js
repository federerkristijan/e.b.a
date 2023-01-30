import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

import styles from "@/styles/About.module.css";

const About = ({ about }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className={styles.about}>
      {about &&
        about.map((dominatrix) => (
          <Link href={"/about/" + dominatrix.name} key={dominatrix._id}>
            <Image
              src={urlFor(dominatrix.photo).width(498).url()}
              alt={dominatrix.name}
              className={styles.photo}
              width={498}
              height={512}
            />
          </Link>
        ))}
    </div>
  );
};

export async function getStaticProps() {
  const about = await sanityClient.fetch(`*[_type == "about"]{
    name,
    bio,
    photo,
    url
  }`);

  return {
    props: {
      about,
    },
  };
}

export default About;
