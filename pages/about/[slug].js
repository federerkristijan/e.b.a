import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/sanity";
// import { getClient } from "@/lib/sanity.server";
import { dominatrixQuery, slugPathQuery } from "@/lib/queries";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

async function getDominatrix() {
  const res = await fetch('slugPathQuery', {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}


const AboutMe = async ({ params }) => {
  const dominatrix = await getDominatrix(params.id);
  const router = useRouter();

  // console.log(dominatrix)

  const slug = data?.dominatrix?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  //  need: rendering just one object of the array, not the both
  return (
    <main preview={preview}>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <div key={dominatrix._id}>
          <h2>{dominatrix.name}</h2>
          <h4>{dominatrix.bio}</h4>
          <Image
            src={urlFor(dominatrix.photo).url()}
            alt={dominatrix.name}
            width={498}
            height={512}
          />
          <h1>test</h1>
          <Link href={dominatrix.url}>
            <p>{dominatrix.url}</p>
          </Link>
        </div>
      )}
    </main>
  );
};

export default AboutMe;
