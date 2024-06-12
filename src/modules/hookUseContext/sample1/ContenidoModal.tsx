// ContenidoModal.js
import React from 'react';
import { useModal } from './modal-context';

function ContenidoModal() {
    
  const { isModalOpen,closeModal } = useModal();
  if (!isModalOpen) {
    return null; // No renderizar el modal si no está abierto
  }

  return (
    <div>
    <div className="modal">
      <h2>Modal Content</h2>
      <p>Este es el contenido del modal.</p>
      <button onClick={closeModal}>Cerrar</button>
    </div>
    </div>
  );
}

export default ContenidoModal;
