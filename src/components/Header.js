import React from 'react'
import '../App.css';

const Header = () => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <span style={{ color: 'yellow', margin: '0px 0px 0px 30px' }}>React </span>
                    Project
                </h1>
            </div>
            <div >
                <nav>
                    <ul className="navigation">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="https://github.com/Taras125">Code</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
