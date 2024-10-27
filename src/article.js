import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/article.css'
const yolo = require('./images/YOLO.png')
const shorturl = require('./images/shorturl.png')
export default function Article() {
    const [detail, setDetail] = useState('');
    return (
        <>
            <div className='grid-container'>
                <div className={detail === 'yolo' ? 'items-grid-open' : 'items-grid'}><img src={yolo} alt='yolo' /><h5 >Strawberry Detection with YOLO V8</h5><div>Backend & frontend Developer</div><div className='detail-contrainer'><div className='git_moredetail'><div className='linkgit'><a href='https://github.com/Surachaizxzx/Strawberry_detection' target="_blank" rel="noopener noreferrer">GitHub</a></div><div className='detail' onClick={() => { setDetail(prevDetail => prevDetail === 'yolo' ? null : 'yolo') }}>More Detail</div></div></div>
                    {detail === 'yolo' ? < div className='detail-info'> Developed a Line chatbot for detecting strawberry diseases using deep learning techniques.
                        Implemented the webhook using Node.js (Express, Axios) and built the disease prediction model with Python's Flask framework.
                        Deployed the application on Vercel.
                        Trained the model using YOLOv8 with a dataset of over 8,000 images.
                    </div> : ''}</div>
                <div className={detail === 'shorturl' ? 'items-grid-open' : 'items-grid'}><img src={shorturl} alt='shorturl' /><h5 >Shorturl Website</h5><div>Backend & frontend Developer</div><div className='detail-contrainer'><div className='linkgit'><a href='https://github.com/Surachaizxzx/MySynerry_shorturl' target="_blank" rel="noopener noreferrer">GitHub</a></div><div className='detail' onClick={() => { setDetail(prevDetail => prevDetail === 'shorturl' ? null : 'shorturl') }}>More Detail</div></div>
                    {detail === 'shorturl' ? < div className='detail-info'> 1. Frontend (React and Bootstrap)
                        Main Page: Users can input long URLs they wish to shorten.
                        Display Section: Once a URL is shortened, the shortened URL is displayed for the user.
                        Bootstrap Styling: Enhances layout and styling for users interface.
                        2. Backend (Node.js and Express.js)
                        URL Processing: Receives URLs from the frontend form, validates them, and generates a shortened link.
                        URL Storage: The shortened URLs are saved to a database for reference.
                        Redirection: When users access the shortened URL, the backend looks up the original URL and redirects the user accordingly.</div> : ''}</div>

            </div >
        </>
    );
}