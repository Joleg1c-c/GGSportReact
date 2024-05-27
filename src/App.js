import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppAbout from './Pages/AppAbout.js';
// import AppHome from './Pages/AppHome.js';
import AppLogin from './Pages/AppLogin.js';
import AppRegister from './Pages/AppRegister.js';
import AppCards from './Pages/AppCards.js';
import AppProfile from './Pages/AppProfile.js';
import AppConfirm from './Pages/AppConfirm.js';

function App(){
    return (
    <div className='App'>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<AppCards/>} />
                <Route path='/about' element={<AppAbout/>} />
                <Route path='/login' element={<AppLogin/>} />
                <Route path='/regis' element={<AppRegister/>} />
                <Route path='/profile' element={<AppProfile/>} />
                <Route path='/comform' element={<AppConfirm/>} />
            </Routes>
            <Footer/>
        </Router>
    </div>)
}

export default App