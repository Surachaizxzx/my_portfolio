import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/section.css'
import Section from './section';
const webLogo = require('./images/weblogo.png');
export default function Nav() {
    const [page, setCurrentPage] = useState('home');
    return (
        <>
            <div className="contrainer-nav">
                <div className="img-contrainer"><img src={webLogo} alt="webLogo" /></div>
                <ul className="contrainer-nav">
                    <li onClick={() => setCurrentPage('home')}> Home</li>
                    <li onClick={() => setCurrentPage('contact')}>Contact</li>
                    <li onClick={() => setCurrentPage('my_resume')}>My Resume</li>
                </ul>
            </div >
            {page === 'home' ? < Section /> : ''}
            {page === 'contact' ? '' : ''}
            {page === 'my_resume' ? '' : ''}
        </>
    );
}
