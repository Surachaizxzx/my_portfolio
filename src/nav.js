import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/section.css'
import SectionScreen from "./sectionscreen";
import Contact from "./contactScreen";
import Resume from "./resume";
const webLogo = require('./images/weblogo.png');
export default function Nav() {
    const [page, setCurrentPage] = useState('home');
    return (
        <div className="main-container">
            <div className="contrainer-nav">
                <div className="img-contrainer"><img src={webLogo} alt="webLogo" /></div>
                <ul className="contrainer-nav">
                    <li onClick={() => setCurrentPage('home')}><i class="bi bi-house" style={{ marginRight: '1vw' }}></i> Home</li>
                    <li onClick={() => setCurrentPage('contact')}> <i class="bi bi-person-rolodex" style={{ marginRight: '1vw' }}></i>Contact</li>
                    <li onClick={() => setCurrentPage('my_resume')}><i class="bi bi-file-earmark-person" style={{ marginRight: '1vw' }}></i>My Resume</li>
                </ul>
            </div >
            {page === 'home' ? < SectionScreen /> : ''}
            {page === 'contact' ? <Contact /> : ''}
            {page === 'my_resume' ? <Resume /> : ''}
        </div >
    );
}
