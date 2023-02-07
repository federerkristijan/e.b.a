import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/client";
import { slugQuery, slugPathQuery } from "@/lib/queries";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

const AboutMe = ({ data = {}, preview }) => {
  const router = useRouter();

  const slug = data?.dominatrix?.slug;

  const { data: dominatrix } = usePreviewSubscriptions(slugQuery, {
    params: { slug },
    initalData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  // const builder = imageUrlBuilder(sanityClient);

  // function urlFor(source) {
  //   return builder.image(source);
  // }

  //  need: rendering just one object of the array, not the both
  return (
    <main preview={preview}>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </main>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const dominatrix = await sanityClient.fetch(slugQuery, { slug: params.slug });

  return {
    props: {
      data: {
        dominatrix,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(slugPathQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default AboutMe;
