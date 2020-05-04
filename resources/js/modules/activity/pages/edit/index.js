import { connect } from 'react-redux'
import Activity from '../../Activity'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const activity = state.activitys.data.find(activity => activity.id === Number(params.id))
  return {
    activity: activity ? new Activity(activity) : new Activity({})
  }
}

export default connect(mapStateToProps)(Page)
