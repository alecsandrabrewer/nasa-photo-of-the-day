import React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #b4ceff;
    width: 80%;
    margin: 0 auto;
    .copyright {
        font-style:italic;
        font-size: 1.3rem;
        color:#6d6d6e;
    }
`;

const Header = (props) => {
 
    const {copyright, title} = props.data
    return (
        <NavStyled>
            <h1>
                NASA Photo of the Day
            </h1>
            <h2>
            {title} <span className='copyright'> by {copyright}</span>
            </h2>
        </NavStyled>
    )
}

export default Header;