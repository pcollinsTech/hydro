// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { activityListRequest, activityUpdateRequest, activityRemoveRequest } from '../../service'

// import components
import ActivityRow from './components/ActivityRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'

class Page extends Component {
  static displayName = 'ActivitiesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    activities: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.togglePublish = this.togglePublish.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)
  }
  
  UNSAFE_componentWillMount() {
    const { dispatch } = this.props
  
    dispatch(activityListRequest({}))
  }

  pageChange(pageNumber) {
    this.props.dispatch(activityListRequest({ pageNumber }))
  }
  
  togglePublish(id) {
    const activity = this.props.activities.find(activity => (activity.id === id))
    
    if (!activity)
      return
  
    activity.published = !activity.published
    if (activity.published) {
      activity.publishedAt = moment()
    } else {
      activity.publishedAt = null
    }
    
    this.props.dispatch(activityUpdateRequest(activity.toJson()))
  }
  
  handleRemove(id) {
    this.props.dispatch(activityRemoveRequest(id))
  }
  
  renderActivities() {
    return this.props.activities.map((activity, index) => {
      return <ActivityRow key={index}
                         activity={activity}
                         index={index}
                         togglePublish={this.togglePublish}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    console.log("HI", this.props)
    return <main className="mr-4" role="main">

    <div className="container">
      <div className="row d-flex justify-content-between my-5">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h4>Activity Data</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non id assumenda repudiandae esse architect</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h4>Activity Data</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non id assumenda repudiandae esse architect</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h4>Activity Data</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non id assumenda repudiandae esse architect</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Activities Overview </h1>
      <table className="table table-responsive table-striped">
        <thead className="thead-inverse">
        <tr>
          <th>#</th>
          <th>name</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Published At</th>
          <th><Link to='/activities/create' className="btn btn-success">Add</Link></th>
        </tr>
        </thead>
        <tbody>
        { this.renderActivities() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
    </div>
      </main>
  }
}

export default Page
