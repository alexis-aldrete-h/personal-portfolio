import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { WebDeveloperProvider } from './components/WebDeveloperContext';
import { FilmmakerProvider } from './components/FilmmakerContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import WebDeveloperPage from './components/pages/webDeveloper/WebDeveloperPage';
import IntroPage from './components/pages/intro/IntroPage';
import FilmmakerPage from './components/pages/filmmaker/FilmmakerPage';



function App() {
  return (
    <FilmmakerProvider>
      <WebDeveloperProvider >
        <Router>
          <Routes>
            <Route path='/' element={<IntroPage />}></Route>
            <Route path='/web-developer' element={<WebDeveloperPage />}></Route>
            <Route path='/Filmmaker' element={<FilmmakerPage />}></Route>
          </Routes>
        </Router>
      </WebDeveloperProvider>
    </FilmmakerProvider>
  );
}

export default App;