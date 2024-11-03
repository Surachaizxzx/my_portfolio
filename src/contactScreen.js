import React from "react";
const profile = require('./images/profile.jpg');
export default function Contact() {
    return (
        <>
            <div className="main_contact">
                <div className="container_topic">
                    <h1>Contact</h1>
                </div >
                <div className="container_img"><img src={profile} alt="profile"></img><div className="contact">
                </div>
                </div>
                <div className="container_contact">
                    <span className="contact_item"><div className="Inside_item"><i class="bi bi-telephone"></i>
                        <p>Phone : +6640261977</p>
                        <p>Email : surachaikai2545@gmail.com</p>
                    </div></span>
                    <span className="contact_item"><div className="Inside_item"><i class="bi bi-github"></i>
                        <p>Github : https://github.com/Surachaizxzx</p>

                    </div></span>
                </div >
            </div >
        </>
    )
}