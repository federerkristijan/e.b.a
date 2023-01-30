const katrix = () => {
  return (
    <div>

    </div>
  )
}

export async function getStaticProps() {
  const katrix = await sanityClient.fetch(`*[_type == "about"]`);

  return {
    props: {
      katrix: {
        
      }
    },
  };
}

export default katrix
