import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      className="modal-content outline-none overflow-y-scroll h-[90%]"
      overlayClassName="modal-overlay"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
