import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../common/wysiwyg-editor/index'

const displayName = 'ActivityFrom'
const propTypes = {
  activity: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ activity, errors, onChange, onSubmit }) => {
  
  function handleChange(name, value) {
    if (value !== activity[name]) {
      onChange(name, value)
    }
  }
  
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input type="text"
               id="name"
               name="name"
               className={`form-control ${errors.has('name') && 'is-invalid'}`}
               placeholder="Name"
               value={activity.name || ''}
               onChange={e => handleChange(e.target.name, e.target.value)} />
        {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
      <div className="col-sm-10">
        <textarea id="description"
                  name="description"
                  className={`form-control ${errors.has('description') && 'is-invalid'}`}
                  rows="3"
                  placeholder="Description"
                  value={activity.description}
                  onChange={e => handleChange(e.target.name, e.target.value)} />
        {errors.has('description') && <div className="invalid-feedback">{errors.first('description')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
      <div className="col-sm-10">
        <MyEditor id="content" value={activity.content} onChange={e => handleChange('content', e)} />
        {errors.has('content') && <div className="invalid-feedback">{errors.first('content')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10 ml-auto">
        <button disabled={errors.any()} type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
