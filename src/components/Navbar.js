import React from 'react';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  return (
    <div className="nav">
      <div className="ul_container">
        <h1>Bookstore CMS</h1>
        {'>'}
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>

      <span id="icon">
        <a to="/" className="user_icon">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </a>
      </span>
    </div>
  );
}

export default Navigation;
