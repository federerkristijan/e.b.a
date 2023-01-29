import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div>
    <div>
      <Link href="/katrix">
        <Image src="/" alt="katrix"/>
      </Link>
    </div>
    <div>
      <Link href="/vyra">
        <Image src="/" alt=""/>
      </Link>
    </div>
    </div>
  )
}

export default About
