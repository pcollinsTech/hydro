// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Link } from 'react-router-dom'

const displayName = 'ActivitiesComponent'
const propTypes = {
  index: PropTypes.number.isRequired,
  activity: PropTypes.object.isRequired,
}

// const renderAuthor = (activity) => {
//   return activity.user && `By ${ activity.user.name }`
// }

const renderPublishedAt = (activity) => {
  return activity.publishedAt && `at ${activity.publishedAt.format('MMMM D, YYYY')}`
}

function render ({ activity }) {
  return <div className="col-12 col-sm-9 mb-5 mx-auto">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{activity.name}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{renderPublishedAt(activity)}</h6>
        <p className="card-text">{ activity.description }</p>
        <Link to={`blog/${activity.slug}`} className="card-link">Read More</Link>
      </div>
    </div>
  </div>
}

render.displayName = displayName
render.propTypes = propTypes

export default render
