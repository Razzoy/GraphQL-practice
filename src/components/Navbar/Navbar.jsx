import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../navlinks'
import style from './Navbar.module.scss'

export function Navbar() {

  return (
    <nav className={style.navStyle}>
    {navLinks.map((item) => {
        return <NavLink key={item.title} to={item.link}>{item.title}</NavLink>
    })}
    </nav>
  )
}
