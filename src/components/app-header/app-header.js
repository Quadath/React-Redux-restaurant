import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom/cjs/react-router-dom.min';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to='/menu' className="header__link">Menu</Link>
            <Link to='/cart' className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;