import React, { Component } from 'react'
import {  NavItem, NavLink } from 'reactstrap';

import { Nav } from "./styles"

export class SideNav extends Component {
    
    render() {
        return (
            <Nav>
                <p>List Based</p>

                <ul className="d-flex flex-column">

                <NavItem>
                    <NavLink href="/scheduler">Scheduler</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/department">Department</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="Activities">Activities</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
                </ul>
                <hr />
            
            </Nav>
        )
    }
}

export default SideNav
