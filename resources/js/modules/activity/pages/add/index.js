import { connect } from 'react-redux'
import Activity from '../../Activity'

// import components
import Page from './Page'

const mapStateToProps = () => {
  const activity = new Activity({})
  return {
    activity
  }
}

export default connect(mapStateToProps)(Page)
