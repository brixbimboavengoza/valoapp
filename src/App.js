import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'
// Templates
import HomePage from './components/templates/HomePage';
import SinglePage from './components/templates/SinglePage';
// Pages
import Agents from './components/Agents';
import Weapons from './components/Weapons';
import Maps from './components/Maps';
// Sub Pages
import Agent from './components/Agent';
import WeaponInfo from './components/WeaponInfo';
import Bundles from './components/Bundles';
import MapInfo from './components/MapInfo';
import Melee from './components/subpages/Melee';
        
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route element={<HomePage/>}>
            <Route path='/' element={<Agents/>} />
            <Route path='/weapons' element={<Weapons/>} />
            <Route path='/maps' element={<Maps/>} />
            <Route path='/bundles' element={<Bundles/>} />
          </Route>
          <Route element={<SinglePage/>}>
            <Route path='/agent' element={<Agent/>} />
            <Route path='/weapon-info/:name' element={<WeaponInfo/>} />
            <Route path='/weapon-info/melee' element={<Melee/>} />
            <Route path='/map-info/:name' element={<MapInfo/>} />
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
