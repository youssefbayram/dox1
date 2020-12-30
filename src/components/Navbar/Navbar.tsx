import React, { FC } from 'react'
import './Navbar.css'

export const NavBar1: FC =() =>{
    return (
    <div className="sidenav">
      <img src="Logo.png" className="logo" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Register</a>
      <a href="#">Contact</a>
    </div>
    )
  }