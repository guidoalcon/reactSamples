// App.js
import React from 'react';
import { ModalProvider } from './modal-context';
import BotonAbrirModal from './BotonAbrirModal';
import ContenidoModal from './ContenidoModal';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <h1>Aplicación con Modal</h1>
        <BotonAbrirModal />
        <ContenidoModal />
      </div>
    </ModalProvider>
  );
}

export default App;
