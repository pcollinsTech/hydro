// libs
import { connect } from 'react-redux'
import Activity from '../../../modules/activity/Activity'

// components
import Activites from './components/Activities'

const mapStateToProps = state => {
  const {data, ...meta} = state.activities
  
  return {
    activities: data.map((activity) => new Activity(activity)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Activites)
