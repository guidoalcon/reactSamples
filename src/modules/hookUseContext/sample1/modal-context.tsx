
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }:any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log('OPEN');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log('CLOSE');
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
