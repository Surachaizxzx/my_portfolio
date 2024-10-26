import React,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/article.css'
const yolo = require('./images/YOLO.png')
const shorturl = require('./images/shorturl.png')
export default function Article() {
    const [detail, setDetail]=useState('');
    function clickinfo(e) {
        eventprevent();

        
    }
    return (
        <>
            <div className='grid-container'>
                <div className='items-grid'><img src={yolo} alt='yolo' /><h5 >Strawberry Detection with YOLO V8</h5><div>Backend & frontend Developer</div><div className='detail-contrainer'><div className='linkgit'><a href='https://github.com/Surachaizxzx/MySynerry_shorturl' target="_blank" rel="noopener noreferrer">GitHub</a></div><div className='detail' onClick={(e)=>{clickinfo}}>More Detail</div></div></div>
                <div className='items-grid shorturl'><img src={shorturl} alt='yolo' /><h5 className=''>Shorturl Website</h5><div>Backend & frontend Developer</div><div className='linkgit'><a href='https://github.com/Surachaizxzx/Strawberry_detection' target="_blank" rel="noopener noreferrer">GitHub</a></div></div>
            </div>
        </>
    );
}