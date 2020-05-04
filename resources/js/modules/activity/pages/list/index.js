// import libs
import { connect } from 'react-redux'
import Activity from '../../Activity'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.activites
  
  return {
    activites: data.map((activity) => new Activity(activity)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
