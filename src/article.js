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
           <div className='grid-maincontain'>
            <div className='item-project'>1</div>
            <div className='item-project'>2</div>
           </div>
           <div className='grid-maincontain'>
            <div className='item-project'>3</div>
            <div className='item-project'>4</div>
           </div>
        </>
    );
}