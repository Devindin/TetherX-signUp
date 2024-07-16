import React from 'react';
import { useStep } from '../context/StepContext';

const Steper = () => {
  const { currentStep } = useStep();
  const steps = ["1", "2", "3"];

  return (
    <div className="flex justify-between mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      {steps.map((step, i) => (
        <div 
          key={i} 
          className={`step-item ${currentStep === i + 1 ? 'active' : ''} ${currentStep > i + 1 ? 'completed' : ''}`}
        >
          <div className={`step ${currentStep > i + 1 ? 'completed' : ''}`}>{i + 1}</div>
        </div>
      ))}
    </div>
  );
}

export default Steper;
