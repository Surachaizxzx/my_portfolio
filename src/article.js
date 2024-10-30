import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/section.css'
const yolo = require('./images/YOLO.png')
const shorturl = require('./images/shorturl.png')
export default function Article() {
    return (
        <>
            <div className="Article_Item"><div className="Main_Inside_Item">
                <div className='Img_contain' ><img className="Item_img" src={yolo} alt='yolo'></img></div>
                <div className='Text_contain'>
                    <div className='Topic'><h6>Project Name : </h6><p>Strawberry diseases detection</p></div>
                    <div className='Detail'><h8>" Project info " </h8><p>Developed a Line chatbot for detecting strawberry diseases using deep learning techniques.
                        Implemented the webhook using Node.js (Express, Axios) and built the disease prediction model with Python's Flask framework.
                        Deployed the application on Vercel.
                        Trained the model using YOLOv8 with a dataset of over 8,000 images.</p></div>
                </div>

            </div></div >
            <div className="Article_Item"><div className="Main_Inside_Item">
                <div className='Img_contain' ><img className="Item_img" src={shorturl} alt='shorturl'></img></div>
                <div className='Text_contain'>
                    <div className='Topic'><h6>Project Name : </h6><p>Strawberry diseases detection</p></div>
                    <div className='Detail'><h8>" Project info " </h8><p>This project is designed to allow users to easily create short URLs from long URLs, enabling quick access to content without needing to type the entire long URL. This enhances the convenience of sharing links.</p></div>
                </div>

            </div></div >
        </>
    );
}