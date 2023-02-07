import Image from "next/image";
import Link from "next/link";
// import { sanityClient, urlFor } from "../../lib/client";
import sanityClient from "@/lib/sanity";
// import urlFor from "@/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { getClient, overlayDrafts } from "@/lib/sanity.server";

import styles from "@/styles/About.module.css";

const aboutQuery = `*[_type == "about"]{
  _id,
  name,
  photo,
  slug
}`;

const About = ({ about }) => {

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className={styles.about}>
      {about &&
        about.map((dominatrix) => (
          <div key={dominatrix._id} className={styles.about_card}>
            <Link
              href={{
                pathname: "/about/[slug]",
                query: { slug: dominatrix.slug },
              }}
              as={`/about/${dominatrix.slug.current}`}
            >
              <Image
                src={urlFor(dominatrix.photo).url()}
                alt={dominatrix.name}
                className={styles.photo}
                width={498}
                height={512}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const about = overlayDrafts(await getClient(preview).fetch(aboutQuery));

  return {
    props: {
      about, preview
    },
  };
}


// export async function getStaticProps() {
//   const about = await sanityClient.fetch(aboutQuery);

//   return {
//     props: {
//       about
//     },
//   };
// }

export default About;
