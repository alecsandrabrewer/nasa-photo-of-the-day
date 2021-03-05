import React from 'react';

const Header = (props) => {
 
    const {copyright, title} = props.data
    return (
        <nav>
            <h1>
                NASA Photo of the Day
            </h1>
            <h2>
            {title} <span className='copyright'> by {copyright}</span>
            </h2>
        </nav>
    )
}

export default Header;