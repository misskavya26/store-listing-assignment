import React, { useState } from 'react'
import './CartItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCartAction, adjustQuantityAction } from '../../React-Redux/Action/CartAction';

const CartItem = ({ cartitem }) => {

    const dispatch = useDispatch();

    const [input, setInput] = useState(cartitem.quantity);

    const deletebtn = (id) => {
        dispatch(removeFromCartAction(id));
    }

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustQuantityAction(cartitem.id, e.target.value));
    }

    return (
        <>
            <div className='cartItem'>
                <img
                    className='cartItem__image'
                    src={cartitem.img_url}
                    alt={cartitem.name}
                />
                <div className='cartItem__details'>
                    <p className='details_title'>{cartitem.name}</p>
                    <p className='details__desc'>{cartitem.description}</p>
                    <p className='details__price'>Price: ₹ {cartitem.price}</p>
                    <p className='details__tag'>{cartitem.isVeg ? "Veg" : "Non-Veg"}</p>
                </div>
                <div className='cartItem__actions'>
                    <div className='cartItem__qty'>
                        <label htmlFor="qty">Quantity</label>
                        <input
                            min="1"
                            type="number"
                            id="qty"
                            name="qty"
                            value={input}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <button className='actions__deleteItemBtn' onClick={() => deletebtn(cartitem.id)}>
                        <DeleteIcon fontSize='large' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartItem