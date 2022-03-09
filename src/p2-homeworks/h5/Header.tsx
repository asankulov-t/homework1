import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import h from './Header.module.css'

function Header() {
    // @ts-ignore
    const linkStyle = ({isActive}) => {
        return {
            color: isActive ? `#159357` : ''
        }
    }

    // @ts-ignore
    return (
        <div>
            <nav className={h.nav}>
                <NavLink className={(navData) => (navData.isActive ? h.active : '')}
                         to={'/pre-junior'}>Pre-Junior</NavLink>
                <NavLink className={(navData) => (navData.isActive ? h.active : '')} to={'/junior'}>Junior</NavLink>
                <NavLink className={(navData) => (navData.isActive ? h.active : '')}
                         to={'/junior-plus'}>Junior+</NavLink>
            </nav>
        </div>
    )
}

export default Header
