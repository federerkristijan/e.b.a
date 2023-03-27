import Image from "next/image";
import Link from "next/link";

export const Domina = ({ props }) => {
  props.dominatrix?.map((domina) => (
    <div key={domina._id}>
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
    </div>
  ));
};
