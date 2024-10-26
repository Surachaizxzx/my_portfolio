import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/article.css'
export default  function Article(){
    return (
        <>
        <div className='grid-container'>
        <div className='items-grid'>1</div>
        <div className='items-grid'>2 </div>
        <div className='items-grid'>3</div>
        <div className='items-grid'>4</div>
        </div>
        </>
    );
}