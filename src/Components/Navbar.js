// eslint-disable-next-line 
import { SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo.jpg';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Navbar.css';

function Navbar() {




    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
     
    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

   useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    
        const [colorChange, setColorchange] = useState(false);
        
        const changeNavbarColor = () =>{
           if(window.scrollY >= 80){
             setColorchange(true);
           }
           else{
             setColorchange(false);
           }
        };
        useEffect(() => {
            changeNavbarColor();
          }, []);
    

    return(
        <Fragment>
        <div className={colorChange ? 'navbar__colorChange' : 'navbar'}>
            <div className="navbar-container">
                
                <div className="navbar__left">
                <Link to="/" className="navbar-travelBrat" onClick={closeMobileMenu}>
                TravelBrat <img className="navbar-travelBrat-logo" src={Logo} alt="travel-brat"/>         
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                </div>
            <div className="navbar__center">
                <input type="text"/>
                <SearchOutlined/>
            
            </div>
            </div>
            <div className="navbar__right">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            </div>
            
        </div>
        </Fragment>
    );
}

export default Navbar;
