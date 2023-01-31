import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const AboutMe = ({ about }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div>
      <p>hello</p>
      {about &&
        about.map((item) => (
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
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(`*[_type == "about" && defined(_id)]{
    "params": {
      "id":_id,
    }
  }`);

  // const dominatrix = await sanityClient.find({}, { _id: 1 }).toArray();

  // const paths = about.map((dominatrix) => ({
  //   params: { id: about._id.toString() }
  // }))

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const dominatrix = await sanityClient.fetch(`*[_type == "about"]{
    _id,
    name,
    bio,
    photo,
    url
  }`);

  return {
    props: {
      dominatrix: {
        id: id,
      },
    },
  };
}

export default AboutMe;
