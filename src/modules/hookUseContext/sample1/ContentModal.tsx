import { useModal } from './modal-context';

function ContentModal() {
    
  const { isModalOpen,closeModal } = useModal();
  if (!isModalOpen) {
    return null;
  }

  return (
    <div>
    <div className="modal">
      <h2>Modal Content</h2>
      <p>This is content of modal.</p>
      <button onClick={closeModal}>Close modal</button>
    </div>
    </div>
  );
}

export default ContentModal;
