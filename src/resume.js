import React from "react";
const resume = require('./images/resume.png');
export default function Resume() {
    return (<>
        <div className="container_resume">
            <div className="resume_item"><img src={resume} alt="resume" /></div>
        </div >
    </>);
}