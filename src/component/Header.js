import React from 'react';
import '../css/Header.css';
import photo from '../img/photo-1.png';

const Header = () => {
    return (
        <cointainer className="wrapper">
            <div className="logo">
                logo
           </div>
            <div className="title">
                <h1>Odkryj nowy wymiar oszczędzania.</h1>
                <p>Aplikacja stworzona po to, aby ułatwić oszczczędznie środków własnych. Posiada liczne zalety.</p>
                <button>DOWNLOAD</button>
            </div>
            <div className="start-view">
                <img src={photo} alt="" />
            </div>
        </cointainer>
    );
}

export default Header;