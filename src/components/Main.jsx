import React, {useState} from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
    background: pink; 
    width: 80%;
    margin: 0 auto;
    #exp {
        display: flex;
        align-items: center;
        padding: 0 2%;
        line-height: 1.3rem;
    }
    #author {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2%;
    }
    img {
        width: 100%;
    }
`;        

const Main = (props) => {
    // console.log('props', props.data);
    const {hdurl, copyright, date, explanation} = props.data

    return(
        <DivStyled>
            <img src = {hdurl}/>
            <p id='exp'>{explanation}</p>
            <div id='author'>
                <p>{copyright}</p>
                <p>{date}</p>
            </div>
        </DivStyled>
    )
}

export default Main;