import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const query = `*[_type == "dominatrix" && slug.current == $slug][0]{
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
        {/* <h1>{dominatrix.name}</h1>
        <Image src={urlFor(dominatrix?.photo).url()} alt={dominatrix.name} width={350} height={300}/>
        <h2>{dominatrix.bio}</h2> */}
        {/* <Link href={dominatrix.url}>{dominatrix.url}</Link> */}
      {dominatrix &&
        dominatrix.map((item) => (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <h4>{item.bio}</h4>
            <Image
              src={urlFor(item.photo).width(498).url()}
              alt={item.name}
              className={styles.photo}
              width={498}
              height={512}
            />
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
  const paths =
    await sanityClient.fetch(
      `*[_type == "dominatrix" && defined(slug.current)]{
        "params": {
          "slug": slug.current,
    }
  }`);

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const dominatrix = await sanityClient.fetch(query, { slug });

  return {
    props: {
      data: { dominatrix },
    },
  };
}

export default AboutMe;
