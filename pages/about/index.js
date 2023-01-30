import Image from "next/image"
import Link from "next/link"

import styles from "@/styles/About.module.css";
import Dasa from "../../styles/assets/Dasa1.png";
import Vyra from "../../styles/assets/Vyra1.png";

const About = () => {
  return (
    <div className={styles.about}>
    <div>
      <Link href="/katrix">
        <Image src={Dasa} alt="katrix" className={styles.photo} width={498} height={512} />
      </Link>
    </div>
    <div>
      <Link href="/vyra">
        <Image src={Vyra} alt="" className={styles.photo} width={498} height={512} />
      </Link>
    </div>
    </div>
  )
}

export default About
