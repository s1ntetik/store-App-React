import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ orderTotal, orderCount, gitLink }) => {
  return (
      <div>
        <header className='shop-header row'>
          <Link to="/">
            <div className='logo text-dark'>Store</div>
          </Link>
          <Link to="/cart">
            <div className='shopping-cart'>
              <i className='cart-icon fa fa-shopping-cart'/>
              { orderCount } items (${ orderTotal })
            </div>
          </Link>

        </header>
        <div className='link'>
          <a target={ '_blank' } href={ gitLink }>This App is on GitHub</a>
        </div>
      </div>
  )
};

const mapStateToProps = ({ shoppingCart: { orderTotal, orderCount }, gitLink }) => {

  return {
    orderTotal: orderTotal,
    orderCount: orderCount,
    gitLink: gitLink
  }
};

export default connect(mapStateToProps)(ShopHeader);
