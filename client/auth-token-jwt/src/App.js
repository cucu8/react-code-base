
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import RouteIndex from './routes/routeIndex';
import { UserProvider } from "./context/UserContext"
import Modal from './components/Modal';
import { ModalProvider } from "./context/ModalContext";

function App() {


  return (
    <>
      <Toaster />
      <UserProvider>
        <ModalProvider>
          <Modal />
          <RouteIndex />
        </ModalProvider>
      </UserProvider>
    </>
  );
}

export default App;
