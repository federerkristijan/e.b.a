import Link from "next/link"


const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact us</Link>
          </li>
          <li>
            <Link href='/reviews'>Reviews</Link>
          </li>
          <li>
            <Link href='/sessions'>Sessions</Link>
          </li>
          <li>
            <Link href='/impressum'>Impressum</Link>
          </li>
          <li>
            <Link href='/booking'>Booking</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
