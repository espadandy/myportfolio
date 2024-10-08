import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NotesView from "./pages/NotesView";
import Home from './pages/Home'
import LoginView from './pages/LoginView'

import "@aws-amplify/ui-react/styles.css";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<NotesView />} />
        <Route path="/login/*" element={<LoginView />} />
      </Routes>
    </Router>
  );
}
