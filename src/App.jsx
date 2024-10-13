import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NotesView from "./pages/NotesView";
import Home from './pages/Home'
import LoginView from './pages/LoginView'
import CVPage from './pages/CVPage'

import "@aws-amplify/ui-react/styles.css";
import GalleryView from './pages/GalleryView';
import './App.css';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<NotesView />} />
        <Route path="/login/*" element={<LoginView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </Router>
  );
}
