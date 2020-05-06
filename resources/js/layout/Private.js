//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../common/navigation/index'
import ScrollTop from '../common/scroll-top/index'
import Footer from '../common/footer/index'
import SideNav from "./SideNav/SideNav"



const displayName = 'Private Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PrivateLayout({ children }) {
  return (
  <div >
    <div className="container-fluid">
      <div className="row">

        <div className="col-sm-3 col-md-2 sidebar">
          <SideNav />
        </div>
        <div className="col-sm-9 col-md-10 main" style={{padding: "0 !important"}}>
        <Navigation />
          { children }
          <ScrollTop />
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

PrivateLayout.dispatch = displayName
PrivateLayout.propTypes = propTypes

export default PrivateLayout
