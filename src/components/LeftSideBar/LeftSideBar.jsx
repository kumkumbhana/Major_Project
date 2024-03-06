import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSideBar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active' >
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='side-nav-links' activeClassName='active' >
                    <img src={Globe} alt='Globe' width='13'/>
                    <p style={{paddingLeft:"7px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active'  >
                    <p style={{paddingLeft:"20px"}}>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeClassName='active'  >
                    <p style={{paddingLeft:"20px"}}>Users</p>
                </NavLink>
            </div>
        </nav> 
      
    </div>
  )
}

export default LeftSideBar