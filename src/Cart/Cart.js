import React, { useEffect, useState } from 'react'
import CartItem from './CartItems/CartItem'
import './Cart.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const { cart: cartItem } = cart;

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {

    let price = 0;
    let items = 0;

    cartItem.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    })

    setTotalPrice(price);
    setTotalItems(items);

  }, [cartItem, totalPrice, totalItems, setTotalPrice, setTotalItems])

  const navigate = useNavigate();

  const backMainPage = () => {
    navigate('/');
  }

  return (
    <>
      <ArrowBackIosNewIcon fontSize='large' className='arrow_icon' onClick={backMainPage} />
      <div className='cart'>
        <div className='cart__items'>

          {cartItem.map((item) =>
            <CartItem cartitem={item} key={item.id} />
          )}

        </div>
        <div className='cart__summary'>
          <h4 className='summary__title'>Cart Summary</h4>
          <div className='summary__price'>
            <span>TOTAL: ({totalItems} items)</span>
            <span>₹ {totalPrice}</span>
          </div>
          <button className='summary__checkoutBtn'>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart