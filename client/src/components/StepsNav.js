import React, { useContext } from 'react';
import { uiContext } from '../context/ui/UiState';

const StepsNav = ({ steps }) => {
  const { goToStep } = useContext(uiContext);

  return (
    <section className='steps-nav'>
      {steps.map((step) => (
        <button
          onClick={(e) => goToStep(step.index)}
          key={step.title}
          className={`steps-nav__item ${
            step.active || step.completed ? 'active' : ''
          }`}
          disabled={!step.active}
        >
          {step.title}
        </button>
      ))}
    </section>
  );
};

export default StepsNav;
