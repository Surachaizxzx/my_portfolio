import React from "react";
const Boostrap = require('./images/Boostrap.png')
const CSS = require('./images/CSS.png')
const dart1 = require('./images/dart.png')
const Git = require('./images/git.png')
const Java = require('./images/java.png')
const Express = require('./images/express.jpg')
const PHP = require('./images/php.png')
const Postman = require('./images/postman.png')
const Python = require('./images/python.png')
const SQL = require('./images/sql.png')
const js = require('./images/js.png')
const html = require('./images/html.png')
const flutter = require('./images/flutter.png')
const react = require('./images/react.png')
const firebase = require('./images/firebase.png')
export default function Tool() {
    return (
        <>
            <h1 style={{
                marginTop: '40px'
            }}>Work Experience</h1>
            <h4 style={{
                marginTop: '20px'
            }}>None</h4>
            <h1 style={{
                marginTop: '50px',
                marginBottom: '30px',
            }}>Skill</h1>
            <div className="main_skill">
                <div className="programming_lan">
                    <div className="tools_detail">
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '150%'
                        }}>Programming Language</div>
                        <div className="tools">
                            <div className="tool">
                                <img src={dart1} alt="dart1" />
                                <h5>Dart</h5>
                            </div>
                            <div className="tool"><img src={Java} alt="Java" /><h5>Java</h5></div>
                            <div className="tool"><img src={PHP} alt="PHP" /><h5>PHP</h5></div>
                            <div className="tool"><img src={Python} alt="Python" /><h5>Python</h5></div>
                            <div className="tool"><img src={CSS} alt="CSS" /><h5>CSS</h5></div>
                            <div className="tool"><img src={js} alt="js" /><h5>Java Script</h5></div>
                            <div className="tool"><img src={html} alt="html" /><h5>Html</h5></div>
                        </div>
                    </div>
                    <div className="tools_detail"></div>
                </div>
                <div className="programming_lan">
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '150%'
                    }}>Dev Tools</div>
                    <div className="tools_detail">
                        <div className="toolsv2">
                            <div className="tool"><img src={Postman} alt="Postman" /><h5>Postman</h5></div>
                            <div className="tool"><img src={Git} alt="Git" /><h5>Git</h5></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="main_skill">
                <div className="programming_lan">
                    <div className="tools_detail">
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '150%'
                        }}>Frameworks / Libraries</div>
                        <div className="tools">

                            <div className="tool"><img src={Boostrap} alt="Boostrap" /><h5>Boostrap</h5></div>
                            <div className="tool"><img src={Express} alt="Express" /><h5>Express</h5></div>
                            <div className="tool"><img src={flutter} alt="flutter" /><h5>Flutter</h5></div>
                            <div className="tool"><img src={react} alt="react" /><h5>React</h5></div>
                        </div>
                    </div>
                </div>
                <div className="programming_lan">
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '150%'
                    }}>Database</div>
                    <div className="tools_detail">
                        <div className="toolsv2">

                            <div className="tool"><img src={SQL} alt="SQL" /><h5>My SQL</h5></div>
                            <div className="tool"><img src={firebase} alt="firebase" /><h5>Firebase</h5></div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}