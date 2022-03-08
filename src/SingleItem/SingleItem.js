import React from 'react'
import './SingleItem.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction } from '../React-Redux/Action/CartAction';

const SingleItem = () => {

  const cart = useSelector((state) => state.cart);
  const { singleItem } = cart;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addtocartbtn = (id) => {
    dispatch(addToCartAction(id))
    alert('Item added to cart Successfully');
    navigate('/')
  }

  const backMainPage = () => {
    navigate('/');
  }

  return (
    <>
      <ArrowBackIosNewIcon fontSize='large' className='arrow_icon' onClick={backMainPage} />
      <div className='singleItem'>
        <img
          className='singleItem__image'
          src={singleItem.img_url}
          alt={singleItem.name}
        />
        <div className='singleItem__details'>
          <p className='details__title'>{singleItem.name}</p>
          <p className='details__description'>{singleItem.description} </p>
          <p className='details__price'>Price: ₹ {singleItem.price}</p>
          <p className='details__tag'>{singleItem.isVeg ? "Veg" : "Non-Veg"}</p>

          <button className='details__addBtn' onClick={() => addtocartbtn(singleItem.id)} >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default SingleItem