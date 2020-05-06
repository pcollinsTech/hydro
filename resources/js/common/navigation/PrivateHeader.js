// import libs
import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
// import components
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from "reactstrap";

// define component name
const displayName = "PrivateHeader";

// validate properties
const propTypes = {
    user: PropTypes.object.isRequired,
    showNavigation: PropTypes.bool.isRequired,
    showDropdown: PropTypes.bool.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

// initiate comppnent
const PrivateHeader = ({ user, showNavigation, showDropdown, toggleDropdown, logout }) =>{
  console.log("USER", user)
  return (
        <div className="navbar navbar-mega d-flex justify-content-right py-4" role="navigation" style={{width: "100%"}}>
                    <div className="ml-auto d-flex justify-space-between" >
                        <div className="px-2">
                            <Link to={`/users/${user.id}`} style={{color: "white"}}>
                                <span className="fa fa-user-o" title="logout" aria-hidden="true" /> Profile
                            </Link>
                        </div>
                        <div className="px-2">
                            <div  onClick={e => logout(e)} style={{color: "white"}}>
                                Logout
                            </div>
                        </div>
                        {/* <Dropdown isOpen={showDropdown} toggle={toggleDropdown}>
                            <DropdownToggle nav caret>
                                {user.name}
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-right">
                                <Link className="dropdown-item" to={`/users/${user.id}`}>
                                    <span className="fa fa-user-o" title="logout" aria-hidden="true" /> Profile
                                </Link>
                                <DropdownItem divider />
                                <DropdownItem onClick={e => logout(e)}>
                                    <span className="fa fa-sign-out" title="logout" aria-hidden="true" /> Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown> */}
                    </div>
                
        </div>
)};

// bind properties
PrivateHeader.displayName = displayName;
PrivateHeader.propTypes = propTypes;

// export component
export default PrivateHeader;
