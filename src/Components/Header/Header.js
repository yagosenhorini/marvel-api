import React from 'react'
import Marvel from "../../Images/marvel-logo.png"

function Header(){
    return(
        <header className="mv-header">
            <nav>
                <ul className="mv-header-list">
                    <li className="mv-header-list__item">
                        <img alt="Marvel Logo" src={Marvel}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;