import React, {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepFormSubmit from './StepFormSubmit';



const Multistepform = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    password: "",
    email: "",
    comments: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const back = () => {
    setCurrentStep(currentStep - 1);
  };
  switch (currentStep) {
    case 1:
      return <Step1 data={formData} handleChange={handleChange} next={next} />;
    case 2:
      return (
        <Step2
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    case 3:
      return (
        <Step3
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    default:
      return <StepFormSubmit data={formData} back={back} />;
  }
};

export default Multistepform;
