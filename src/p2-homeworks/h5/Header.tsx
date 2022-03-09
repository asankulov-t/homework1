import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import h from './Header.module.css'
import {PATH} from "./Routers";

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
                         to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                <NavLink className={(navData) => (navData.isActive ? h.active : '')} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={(navData) => (navData.isActive ? h.active : '')}
                         to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </nav>
        </div>
    )
}

export default Header
