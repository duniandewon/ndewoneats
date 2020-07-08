import React, { createContext, useState } from 'react';

export const uiContext = createContext();

export const UIState = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const [Step, setStep] = useState({
    currStep: 0,
    steps: [],
  });

  const toggleUi = (ui) => {
    if (ui === 'dropdown') setDropdown(!dropdown);
    if (ui === 'modal') setModal(!modal);
    if (ui === 'drawer') setDrawer(!drawer);
  };

  const getSteps = (steps) => setStep({ ...Step, steps });

  const updateStep = (update) => {
    const currStep = Step.currStep;
    if (update === 'next') {
      return setStep({ ...Step, currStep: currStep + 1 });
    }

    if (update === 'prev') {
      return setStep({ ...Step, currStep: currStep - 1 });
    }
  };

  const goToStep = (step) => setStep({ ...Step, currStep: step });

  return (
    <uiContext.Provider
      value={{
        modal,
        dropdown,
        drawer,
        toggleUi,
        Step,
        getSteps,
        updateStep,
        goToStep,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};
