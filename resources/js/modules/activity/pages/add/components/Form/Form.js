import React, { useState } from "react";
import PropTypes from "prop-types";
import MyEditor from "../../../../../../common/wysiwyg-editor/index";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const displayName = "ActivityFrom";
const propTypes = {
  activity: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const Form = ({ activity, errors, onChange, onSubmit }) => {
  const [step, setStep] = useState(1);
  function handleChange(name, value) {
    if (value !== activity[name]) {
      onChange(name, value);
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {step === 1 && (
        <StepOne
          setStep={setStep}
          errors={errors}
          errors={activity}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <StepTwo
          setStep={setStep}
          errors={errors}
          errors={activity}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <StepThree
          setStep={setStep}
          errors={errors}
          errors={activity}
          handleChange={handleChange}
        />
      )}
      {step === 4 && (
        <StepFour
          setStep={setStep}
          errors={errors}
          errors={activity}
          handleChange={handleChange}
        />
      )}
    </form>
  );
};

Form.displayName = displayName;
Form.propTypes = propTypes;

export default Form;
