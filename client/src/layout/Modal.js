import React, { useContext } from 'react';
import Modal from 'react-modal';

import { uiContext } from '../context/ui/UiState';

export default ({ getProductDetail, children }) => {
  const { modal, toggleUi } = useContext(uiContext);

  const closeModal = () => {
    getProductDetail(null);
    toggleUi('modal');
  };

  return (
    <Modal
      isOpen={modal}
      closeTimeoutMS={200}
      contentLabel='product detail'
      className='modal'
      onRequestClose={closeModal}
    >
      <button className='modal-close' onClick={closeModal}>
        <i className='material-icons'>close</i>
      </button>
      {children}
    </Modal>
  );
};
