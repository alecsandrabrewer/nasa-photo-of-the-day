import React, {useState} from 'react';

const Main = (props) => {
    // console.log('props', props.data);
    const {hdurl, copyright, date, explanation} = props.data
    return(
        <div>
            <img src = {hdurl}/>
            <h2>{copyright}</h2>
            <h3>{date}</h3>
            <p>{explanation}</p>
        </div>
    )
}

export default Main;