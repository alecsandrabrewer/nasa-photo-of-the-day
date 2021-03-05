import React, {useState} from 'react';
import "../App.css";

const Main = (props) => {
    // console.log('props', props.data);
    const {hdurl, copyright, date, explanation} = props.data
    return(
        <div className='container'>
            <img src = {hdurl}/>
            <p id='exp'>{explanation}</p>
            <div id='author'>
                <p>{copyright}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Main;