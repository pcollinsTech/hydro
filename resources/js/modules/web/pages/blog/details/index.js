import { connect } from 'react-redux'
import Activity from '../../../../activity/Activity'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const activity = state.activities.data.find(activity => activity.slug === params.slug)
  return {
    activity: activity ? new Activity(activity) : new Activity({})
  }
}

export default connect(mapStateToProps)(Page)
