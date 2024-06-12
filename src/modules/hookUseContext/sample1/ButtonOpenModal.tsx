import { useModal } from './modal-context';

function ButtonOpenModal() {
  const { openModal } = useModal();

  return (
    <button onClick={openModal}>Open Modal</button>
  );
}

export default ButtonOpenModal;