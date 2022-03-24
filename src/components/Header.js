import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../valorant_logo.png';
import PropTypes from 'prop-types';

export default function Header() {

  return (
        <div className='header'>
            <img className='logo' src={logo} />
            <h1>VALORANT</h1>
            <nav className="home navbar">
                <NavLink to='/' activeclassname='active'> Agents </NavLink>
                <NavLink to='/weapons' activeclassname='active'> Weapons </NavLink>
                <NavLink to='/maps' activeclassname='active'> Maps</NavLink>
                <NavLink to='/bundles' activeclassname='active'> Bundles</NavLink>
            </nav>
        </div>
  )
}