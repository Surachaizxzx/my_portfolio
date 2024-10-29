import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/section.css'
const avatar = require('./images/avatar.png')
export default function SectionScreen() {
    return (
        <>
            <div className="main-container">
                <div className="aboutMe-container">
                    <div className="about_text">
                        <div className="aboutMe_detail">
                            <div className="Git_myName">
                                <h4 style={{ marginRight: '10px' }}>Surachai Subnalsing </h4>
                                <div className="gitHub"><a href="https://github.com/Surachaizxzx" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> GitHub</a></div>
                            </div>
                            <p style={{ color: 'lightgray' }}>Web Developper</p>
                            <h1 style={{ color: 'lightgray' }}>About me</h1>
                            <p style={{ color: 'lightgray' }}>"Hi, I'm Guy. I'm studying Electronic (Computer) Engineering at KMUTNB. I can do both Frontend and Backend development, and when I'm not coding, I enjoy reading novels and playing video games!"</p>
                        </div>
                    </div>
                    <div className="about_img">
                        <div className="container_image"><img src={avatar} alt="avatar"></img></div>
                    </div>


                </div >
            </div >
        </>
    );
}