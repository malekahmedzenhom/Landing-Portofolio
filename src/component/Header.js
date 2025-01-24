import React from 'react';


export default function Header() {
    return(
        <div className='header'>
            <div className='logo'>
                <img src='./pngaaa.com-2021277.png' alt='' className='logo-icon'/>
                <span>Malek Ahmed</span>
            </div>
            <nav className='nav'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contact'>Contact</a>
            </nav>
            {/* <button className='cta-button'>Hire Me</button> */}
        </div>
    );
}