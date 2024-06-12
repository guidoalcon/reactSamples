// Modal.js
import React from 'react';
import { useModal } from './modal-context';

export function Modal() {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) {
    console.log('Is Open',isModalOpen);
    return null; // No renderizar el modal si no está abierto
  }

  return (
    <div className="modal">
      <h2>Modal Content</h2>
      <p>Este es el contenido del modal.</p>
      <button onClick={closeModal}>Cerrar</button>
    </div>
  );
}
