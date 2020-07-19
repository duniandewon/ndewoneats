import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyModal from 'react-modal';

import { uiContext } from '../context/ui/UiState';

MyModal.setAppElement('#root');

const Modal = ({ children, modalOnClose, closeBtn }) => {
  const { modal, toggleUi } = useContext(uiContext);

  return (
    <MyModal
      isOpen={modal}
      closeTimeoutMS={200}
      className='modal'
      onAfterClose={modalOnClose}
    >
      {closeBtn && (
        <button className='modal-close' onClick={() => toggleUi('modal')}>
          <i className='material-icons'>close</i>
        </button>
      )}
      {children}
    </MyModal>
  );
};

Modal.propTypes = {
  closeBtn: PropTypes.bool,
  modalOnClose: PropTypes.func,
};

export default Modal;
