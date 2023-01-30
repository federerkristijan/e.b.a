const AboutMe = () => {
  return (
    <div>
      <p>hello honey</p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await sanityClient.fetch(`*[_type == "about"]{
    name,
    bio,
    photo,
    url
  }`);

  return {
    fallback: false,
  }
}

export async function getStaticProps() {
  const res = await sanityClient.fetch(`*[_type == "about"]{
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
