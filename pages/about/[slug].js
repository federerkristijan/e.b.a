import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { groq } from "next-sanity";

const query = `*[_type == "dominatrix"]{
  _id,
  name,
  slug,
  bio,
  photo,
  url
}`;

const AboutMe = ({ dominatrix }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div>
      <p>hello</p>
      <main>
        {dominatrix &&
          dominatrix.map((item) => (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <h4>{item.bio}</h4>
              <Image
                src={urlFor(item.photo).url()}
                alt={item.name}
                width={498}
                height={512}
              />
              <h1>test</h1>
              <Link href={item.url}>
                <p>{item.url}</p>
              </Link>
            </div>
          ))}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  // const paths = await sanityClient.fetch(
  //   `*[_type == "dominatrix" && defined(slug.current)][]{
  //       "params": {
  //         "slug": slug.current,
  //   }
  // }`
  // );
  const paths = await sanityClient.fetch(
    groq`*[_type == "dominatrix"&& defined(slug.current)][].slug.current`
  );

  return {
    fallback: false,
    paths: paths.map((slug) => ({ params: { slug } })),
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const dominatrix = await sanityClient.fetch(query, { slug });

  return {
    props: {
      dominatrix,
    },
  };
}

export default AboutMe;
