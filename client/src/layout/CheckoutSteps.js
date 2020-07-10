import React, { Fragment, useEffect, useContext, Children } from 'react';
import { uiContext } from '../context/ui/UiState';

import StepsNav from '../components/StepsNav';

const CheckoutSteps = ({ steps, children }) => {
  const { Step, getSteps } = useContext(uiContext);

  const stepContent = Children.toArray(children);

  useEffect(() => {
    let createSteps = steps.map((step, index) => ({
      title: step,
      completed: index < Step.currStep,
      active: index <= Step.currStep,
      index,
    }));
    getSteps(createSteps);

    // eslint-disable-next-line
  }, [Step.currStep]);

  return (
    <Fragment>
      <StepsNav steps={Step.steps} />
      <Fragment>{stepContent[Step.currStep]}</Fragment>
    </Fragment>
  );
};

export default CheckoutSteps;
