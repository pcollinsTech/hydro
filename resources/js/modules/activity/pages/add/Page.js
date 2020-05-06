// import libs
import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { activityAddRequest } from "../../service";
import ReeValidate from "ree-validate";

// import components
import Form from "./components/Form";

class Page extends Component {
  static displayName = "AddActivity";
  static propTypes = {
    activity: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.validator = new ReeValidate({
      name: "required|min:3",
      content: "required|min:10",
      description: "required|min:10",
    });

    const activity = this.props.activity.toJson();

    this.state = {
      activity,
      errors: this.validator.errors,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const activity = nextProps.activity.toJson();

    if (!_.isEqual(this.state.activity, activity)) {
      this.setState({ activity });
    }
  }

  handleChange(name, value) {
    const { errors } = this.validator;

    this.setState({ activity: { ...this.state.activity, [name]: value } });

    errors.remove(name);

    this.validator.validate(name, value).then(() => {
      this.setState({ errors });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const activity = this.state.activity;
    const { errors } = this.validator;

    this.validator.validateAll(activity).then((success) => {
      if (success) {
        this.submit(activity);
      } else {
        this.setState({ errors });
      }
    });
  }

  submit(activity) {
    this.props
      .dispatch(activityAddRequest(activity))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator;

        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }

        this.setState({ errors });
      });
  }

  render() {
    return (
      <div className="container">
        <Form
          {...this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Page;
