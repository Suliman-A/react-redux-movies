import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='navbar'>
            <h1>MOVIES HUB</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                {/* <Link to='/create'>Create new Blog</Link> */}
            </div>
        </nav>
    )
}

export default Header
