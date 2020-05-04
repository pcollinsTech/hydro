// import libs
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title';
import {activityFetchRequest} from '../../../../activity/service'
import {APP_TITLE} from '../../../../../values/index'

class Page extends Component {
  static displayName = 'ActivitiesShowPage'
  static propTypes = {
    match: PropTypes.object.isRequired,
    activity: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  UNSAFE_componentWillMount() {
    this.loadActivity()
  }

  loadActivity() {
    const {match, activity, dispatch} = this.props

    if (!activity.slug) {
      dispatch(activityFetchRequest(match.params.slug))
    }
  }

  renderPublishedDate() {
    const {publishedAt} = this.props.activity

    if (publishedAt) {
      return `at ${publishedAt.format('MMMM d, YYYY')}`
    }
  }

  renderAuthor() {
    const {user} = this.props.activity

    if (user) {
      return `by ${user.name}`
    }

  }

  createMarkup() {
    return {__html: this.props.activity.content};
  }

  renderActivity() {
    const {activity} = this.props
    return (<div className="col-12 col-sm-9 mb-5 mx-auto">
      <h2>{activity.title}</h2>
      <small className="text-muted mb-5">{this.renderPublishedDate()} {this.renderAuthor()}</small>
      <p className="text-muted mb-5">{activity.description}</p>
      <div dangerouslySetInnerHTML={this.createMarkup()}/>
    </div>)
  }

  render() {
    return (
      <DocumentTitle title={`${this.props.activity.title} - ${APP_TITLE}`}>
        <section id="components-activitys">
          <div className="container">
            <div className="row">
              {this.renderActivity()}
            </div>
          </div>
        </section>
      </DocumentTitle>
    )
  }
}

export default Page
