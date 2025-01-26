import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.menuContainer}>
      <img src={menu} alt="menu" className={styles.menu}/>
      </div>
      
      <nav className={styles.nav}>
      <Link to='/about'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      </nav>
     
      
    </div>
  )
}

export default Header