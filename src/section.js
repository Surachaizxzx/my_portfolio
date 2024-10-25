import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/section.css'
const avatar = require('./images/avatar.jpg')
export default function Section() {
    return (
        <>
            <div className='contrainer-section'>
                <div className="text">
                    <div className="contrainer">
                        <h4 style={{ marginRight: '10px' }}>Surachai Subnalsing </h4>
                        <div className="gitHub"><a href="https://github.com/Surachaizxzx" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> GitHub ? </a></div>
                    </div>
                    <div style={{ color: 'lightgray' }}>Web Developper</div>
                    <h2>About me</h2>
                    <p style={{ color: 'lightgray' }}>"Hi, I'm Guy. I'm studying Electronic (Computer) Engineering at KMUTNB. I can do both Frontend and Backend development, and when I'm not coding, I enjoy reading novels and playing video games!"</p>
                </div>
                <div className="avatar"><img src={avatar} alt="avatar"></img></div>
            </div>
            <div style={{ color: 'lightgray',display:"flex",justifyContent:"center" }}>Expertise in the following tools
            </div>
           
           <div style={{display:"flex",justifyContent:"center" }}>
            <div className="marquee">
                <p><div className="items"><i class="bi bi-github"> GitHub</i></div><div className="items"><i class="bi bi-filetype-css"> CSS</i></div><div className="items"><i class="bi bi-filetype-js"> Node.js & React</i></div><div className="items"><i class="bi bi-person-rolodex"> PostMan </i></div><div className="items"><i class="bi bi-database"> SQL & NO SQL</i></div><div className="items"><i class="bi bi-filetype-php"></i> PHP</div></p>
            </div>
            </div>
        </>
    );
}
