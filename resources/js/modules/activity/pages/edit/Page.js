// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { activityEditRequest, activityUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'EditActivity'
  static propTypes = {
    match: PropTypes.object.isRequired,
    activity: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      title: 'required|min:3',
      content: 'required|min:10',
      description: 'required|min:10',
    })
    
    const activity = this.props.activity.toJson()
    
    this.state = {
      activity,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  UNSAFE_componentWillMount() {
    this.loadActivity()
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const activity = nextProps.activity.toJson()
    
    if (!_.isEqual(this.state.activity, activity)) {
      this.setState({ activity })
    }
    
  }
  
  loadActivity() {
    const { match, activity, dispatch } = this.props
    
    if (!activity.id) {
      dispatch(activityEditRequest(match.params.id))
    }
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
    
    this.setState({ activity: { ...this.state.activity, [name]: value} })
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const activity = this.state.activity
    const { errors } = this.validator
    
    this.validator.validateAll(activity)
      .then((success) => {
        if (success) {
          this.submit(activity)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(activity) {
    this.props.dispatch(activityUpdateRequest(activity))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
        
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
        
        this.setState({ errors })
      })
  }
  
  renderForm() {
    const { activity } = this.props
    
    if (activity.id) {
      return <Form {...this.state}
                   onChange={this.handleChange}
                   onSubmit={this.handleSubmit} />
    }
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Edit</h1>
      { this.renderForm() }
    </main>
  }
}

export default Page
