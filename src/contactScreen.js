import React from "react";
const profile = require('./images/profile.jpg');
export default function Contact() {
    return (
        <>
            <div className="main_contact">
                <div className="container_topic">
                    <h1>Contact Me</h1>
                </div >
                <div className="container_img"><img src={profile} alt="profile"></img></div>
                <div className="contrainer_profileinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum.</div>
                <div className="contrainer_profileinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum.</div>
                <div className="contrainer_profileinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum.</div>
                <div className="contrainer_profileinfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum.</div>
            </div>
        </>
    )
}