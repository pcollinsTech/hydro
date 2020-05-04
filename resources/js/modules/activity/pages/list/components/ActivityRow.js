import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'ActivityRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  activity: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const ActivityRow = ({ index, activity, togglePublish, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{activity.name}</td>
    <td>{activity.description}</td>
    <td>{activity.createdAt && activity.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{activity.updatedAt && activity.updatedAt.format('MMMM, DD YYYY')}</td>
    <td>{activity.publishedAt && activity.publishedAt.format('MMMM, DD YYYY')}</td>
    <td>
      <div className="btn-group" role="group" aria-label="Actions">
        {
          activity.published
          ? <button className="btn btn-warning" onClick={() => togglePublish(activity.id)}>Un Published</button>
          : <button className="btn btn-success" onClick={() => togglePublish(activity.id)}>Publish</button>
        }
        <Link className="btn btn-primary" to={`activitys/${activity.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => handleRemove(activity.id)}>Delete</button>
      </div>
    </td>
  </tr>)
}

ActivityRow.displayName = displayName
ActivityRow.propTypes = propTypes

export default ActivityRow