import sanityClient from "../../lib/client";

// const query = ``;

const AboutMe = ({ about }) => {
  return (
    <div>
      <p>hello honey</p>
    </div>
  )
}


export async function getStaticPaths() {
  const about = await sanityClient.fetch(`*[_type == "about"]{
    _id,
    name
  }`);

  // const dominatrix = await sanityClient.find({}, { _id: 1 }).toArray();

  // const paths = about.map((dominatrix) => ({
  //   params: { id: about._id.toString() }
  // }))


  return {
    fallback: false,
    paths: [
      { params: { id: 'Katrix' }},
      { params: { id: 'Lady Vyra' }}
    ]
  }
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
        name: dominatrix.name || null,
        bio: dominatrix.bio || null,
        photo: dominatrix.photo || null,
        url: dominatrix.url || null
      }
    }
  };
}

export default AboutMe;
