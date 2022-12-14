import React from 'react';
import {Link} from "react-router-dom";
import "./NavigationBar.css"


const NavigationBar = () => {
    return (
      <header className="NavigationBar">
          <nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
                <Link to="/word-counter">
                    <li>Word Counter</li>
                </Link>
            </ul>
          </nav>
        </header>
    )
  }

  export default NavigationBar