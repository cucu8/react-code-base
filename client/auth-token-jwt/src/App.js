
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import RouteIndex from './routes/routeIndex';
import { UserProvider } from "./context/UserContext"
import Modal from './components/Modal';
import { ModalProvider } from "./context/ModalContext";
import { ValueProvider } from './context/ValueContext';

function App() {


  return (
    <>
      <Toaster />
      <UserProvider>
        <ValueProvider>
          <ModalProvider>
            <Modal />
            <RouteIndex />
          </ModalProvider>
        </ValueProvider>
      </UserProvider>
    </>
  );
}

export default App;
