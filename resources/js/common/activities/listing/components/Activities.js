import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Activity from './Activity'

class Activities extends Component {
  static displayName = 'Activities'
  static propTypes = {
    activities: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  renderActivities() {
    return this.props.activities.map((activity, index) => {
      return <Activity key={`activity-${index}`}
                      index={index}
                      activity={activity}/>
    })
  }
  
  render() {
    return (<section id="components-activities">
      <div className="container">
        <div className="row">
          { this.props.activities && this.renderActivities() }
        </div>
      </div>
    </section>)
  }
}

export default Activities
