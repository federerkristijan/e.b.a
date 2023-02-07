import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/lib/sanity";
import { getClient, overlayDrafts } from "@/lib/sanity.server";
import { aboutQuery } from '@/lib/queries';
import styles from "@/styles/About.module.css";

const About = ({ about }) => {

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

export default About;
