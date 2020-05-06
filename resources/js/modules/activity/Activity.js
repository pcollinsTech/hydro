import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

class Activity extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.slug = props.slug || ''
    this.name = props.name || ''
    this.description = props.description || ''
    this.published = props.published || false
    this.publishedAt = props.publishedAt ? moment(props.publishedAt) : null

    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Activity
