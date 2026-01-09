// src/components/register/StepIndicator.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface StepIndicatorProps {
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ totalSteps }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current step from URL
  const currentStep = location.pathname.includes('step-3')
    ? 3
    : location.pathname.includes('step-2')
      ? 2
      : 1;

  const handleClick = (step: number) => {
    if (step <= currentStep) {
      navigate(`/register/step-${step}`);
    }
  };

  return (
    <div className="flex w-full items-center justify-between">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className="flex flex-1 cursor-pointer items-center last:flex-none"
        >
          <div
            onClick={() => handleClick(step)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
              step <= currentStep
                ? 'border-ButtonBg bg-ButtonBg text-white hover:bg-[#1f3e4f]'
                : 'cursor-default border-InputStrok bg-white text-SecondaryText'
            }`}
          >
            {step}
          </div>

          {step !== totalSteps && (
            <div
              className={`h-[1.5px] flex-1 ${
                step < currentStep ? 'bg-ButtonBg' : 'bg-InputStrok'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
