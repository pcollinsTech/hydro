// import libs
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import components
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

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
const PrivateHeader = ({ user, showNavigation, showDropdown, toggleDropdown, logout }) => (
    /* <Collapse className="navbar-collapse" isOpen={showNavigation}>
      <ul className="navbar-nav mr-auto">
        <NavItem path="/">Home</NavItem>
        <NavItem path="/articles">Articles</NavItem>
      </ul>

      <ul className="navbar-nav">
        <Dropdown isOpen={showDropdown} toggle={toggleDropdown}>
          <DropdownToggle nav caret>
            { user.name }
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-right">
            <Link className='dropdown-item' to={`/users/${user.id}/edit`}>
              <span className="fa fa-user-o" title="logout" aria-hidden="true"/> Profile
            </Link>
            <DropdownItem divider />
            <DropdownItem onClick={e => logout(e)}>
              <span className="fa fa-sign-out" title="logout" aria-hidden="true"/> Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ul>
    </Collapse> */

    <div>
        <nav className="navbar navbar-fixed-top navbar-mega" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided" data-toggle="menubar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="hamburger-bar"></span>
                </button>
                <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
                    <i className="icon md-more" aria-hidden="true"></i>
                </button>
              
                <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-search" data-toggle="collapse">
                    <span className="sr-only">Toggle Search</span>
                    <i className="icon md-search" aria-hidden="true"></i>
                </button>
            </div>

            <div className="navbar-container container-fluid">
                <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
                    <div className=" navbar-right navbar-toolbar-right">
                        <Dropdown isOpen={showDropdown} toggle={toggleDropdown}>
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
                        </Dropdown>
                    </div>
                </div>
                <div className="collapse navbar-search-overlap" id="site-navbar-search">
                    <form role="search">
                        <div className="form-group">
                            <div className="input-search">
                                <i className="input-search-icon md-search" aria-hidden="true"></i>
                                <input type="text" className="form-control" name="site-search" placeholder="Search..." />
                                <button
                                    type="button"
                                    className="input-search-close icon md-close"
                                    data-target="#site-navbar-search"
                                    data-toggle="collapse"
                                    aria-label="Close"
                                ></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>

        <div className="site-menubar">
            <div className="site-menubar-body">
                <div>
                    <div>
                    </div>
                </div>
            </div>

            {/*<div className="site-menubar-footer">
                <a href="javascript: void(0);" className="fold-show" data-placement="top" data-toggle="tooltip"
                   data-original-title="Settings">
                    <span className="icon md-settings" aria-hidden="true"></span>
                </a>
                <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Logout"  onClick={e => logout(e)}>
                    <span className="icon md-power" aria-hidden="true"></span>
                </a>
            </div>*/}
        </div>
    </div>
);

// bind properties
PrivateHeader.displayName = displayName;
PrivateHeader.propTypes = propTypes;

// export component
export default PrivateHeader;
