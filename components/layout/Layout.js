import Navbar from "./Navbar"

import classes from "./Layout.module.css"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout
