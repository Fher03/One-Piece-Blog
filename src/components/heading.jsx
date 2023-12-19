import React from 'react';

function heading() {
    return (
        <div className="navbar">
            <div className='header container'>
            <div className="header__title">
                <h1><a href="/">One Piece Blog</a></h1>
            </div>
            <div >
                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Recent</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default heading