import {Link} from "react-router-dom";
import {useState} from 'react';
import logos from '../assets/images/logo.svg'



function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div className="navbar1">
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
          <img  src={logos} alt="fireSpot"/>
            {/* <i className="fa fa-code"></i> */}
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/new"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                New
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/popular"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/trending"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/categories"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Categories
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
