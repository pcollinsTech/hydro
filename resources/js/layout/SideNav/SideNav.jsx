import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom"
import styles from "./SideNav.module.css"

export class SideNav extends Component {
    
    render() {
        return (
            <div className={styles.sidebar}>
            <Link to="/" className="navbar-brand"><img className="navbar-brand-logo" src="/images/white-logo.png" title="Hydro" /></Link>
            <Nav>
                <ul className="d-flex flex-column sidenav" >
                    <NavItem>
                        <NavLink href="/scheduler">Scheduler</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/department">Department</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/activities">Activities</NavLink>
                    </NavItem>
                </ul>
                <hr />
            
            </Nav>
            </div>
        )
    }
}

export default SideNav
