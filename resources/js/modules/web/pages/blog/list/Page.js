import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Activities from "../../../../../common/activities/listing/index"

// import services
import { activityListRequest } from "../../../../activity/service"

class Page extends Component {
  static displayName = "HomePage"
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(activityListRequest({ url: '/activities/published' }))
  }

  render() {
    return <div>
      <Activities/>
    </div>
  }
}

export default Page
