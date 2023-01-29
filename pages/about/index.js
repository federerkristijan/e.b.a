import Image from "next/image"
import Link from "next/link"

import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
    <div>
      <Link href="/katrix">
        <Image src="/" alt="katrix" className={styles.photo}/>
      </Link>
    </div>
    <div>
      <Link href="/vyra">
        <Image src="/" alt="" className={styles.photo}/>
      </Link>
    </div>
    </div>
  )
}

export default About
