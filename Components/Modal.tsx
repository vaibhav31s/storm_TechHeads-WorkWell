import React from 'react';
import Form from './Form'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalClass = isOpen
    ? 'fixed inset-0 flex items-center justify-center z-50'
    : 'hidden';

  return (
    <div className={modalClass}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="modal-close p-2 hover:bg-gray-300 rounded-full focus:outline-none focus:ring"
            >
              &times;
            </button>
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Modal Title</h2>
                <Form/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
