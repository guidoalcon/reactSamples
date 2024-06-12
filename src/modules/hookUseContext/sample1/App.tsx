import { ModalProvider } from './modal-context';
import ButtonOpenModal from './ButtonOpenModal';
import ContentModal from './ContentModal';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <center>
          <h1>App with modal </h1>
          <ButtonOpenModal />
          <ContentModal />
        </center>
      </div>
    </ModalProvider>
  );
}

export default App;
