import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/sanity";
// import { getClient } from "@/lib/sanity.server";
import { dominatrixQuery, slugPathQuery, dominatrixBySlugQuery } from "@/lib/queries";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

async function getDominatrix() {
  const res = await sanityClient.fetch(`*[_type == "dominatrix" && defined(slug.current)][1].slug.current`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

const AboutMe = async ({ params }) => {
  const dominatrix = await getDominatrix(params.id);

  const domina = dominatrix?.map((domina) => (
    <div key={domina.slug}>
    <h2>{domina.name}</h2>
    <h4>{domina.bio}</h4>
    <Image
      src={urlFor(domina.photo).url()}
      alt={domina.name}
      width={498}
      height={512}
    />
    <h1>test</h1>
    <Link href={domina.url}>
      <p>{domina.url}</p>
    </Link>
  </div>))

  // const router = useRouter();

  // console.log(dominatrix)

  // const slug = data?.dominatrix?.slug;

  // if (!router.isFallback && !slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  //  need: rendering just one object of the array, not the both
  return (
    <div>
      {domina}
    </div>
  )


};

export default AboutMe;
