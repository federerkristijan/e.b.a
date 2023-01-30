import sanityClient from "../../lib/client";

const recipeQuery = ``;

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

  const paths = about.map((dominatrix) => ({
    params: { id: about._id.toString() }
  }))


  return {
    fallback: false,
    paths
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

  const data = await res.json();

  return {
    props
  };
}

export default AboutMe;
