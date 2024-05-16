import React from 'react';
import Navigation from '../nav/nav';
import "../header/header.css"


//Function renders the header
export default function Header({ currentPage, setCurrentPage }) {
    return (
        <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
            <p id="header-text">Albert Terrazas</p>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}