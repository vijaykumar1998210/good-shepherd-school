import React from 'react'
import './header.css'

function Header() {
    return (
        <div className="header">
            <h1 className="header_head">Good shepherd School</h1>
            <h2 className="header_head2">NH-22 distt. panchkula kalka,haryana</h2>
            <p className="header_head3">Phone : 0173-278876</p>
            <img src={process.env.PUBLIC_URL + "/Images/IMG-20210216-WA0010-removebg-preview.png"} alt="hero_img" />
        </div>
    )
}

export default Header
