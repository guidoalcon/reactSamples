import React from 'react';
import { useModal } from './modal-context';

function BotonAbrirModal() {
  const { openModal } = useModal();

  return (
    <button onClick={openModal}>Abrir Modal</button>
  );
}

export default BotonAbrirModal;