import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className={styles.navbar}>
          <ul className={styles.list_items}>
            <l1>Home</l1>
            <l1>Login</l1>
          </ul>
        </nav>
    </React.Fragment>
  )
}

export default Navbar