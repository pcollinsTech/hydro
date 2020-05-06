// import libs
import { connect } from 'react-redux'
import Activity from '../../Activity'

// import components
import Page from './Page'

const mapStateToProps = state => {

  console.log("STAT£", state)
  const {data, ...meta} = state.activities
  
  return {
    activities: data.map((activity) => new Activity(activity)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
