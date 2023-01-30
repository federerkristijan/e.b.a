import sanityClient from "../../lib/client";

const AboutMe = () => {
  return (
    <div>
      <p>hello honey</p>
    </div>
  )
}

export async function getStaticPaths() {
  const dominatrix = await sanityClient.fetch(`*[_type == "about"]{
    _id,
    name
  }`);

  const paths = dominatrix.map((dominatrix) => ({
    params: { id: dominatrix._id.toString() }
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
