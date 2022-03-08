import React from 'react'
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = ({ filterItem, uniqueList, setRestaurantData, RestaurantApi }) => {

    return (
        <>
            <nav className="navbar">
            
                <div className="btn-group">

                    {uniqueList?.map((data) => {
                        return (
                            <button className='btn-group__item'
                                onClick={() => filterItem(data)}>
                                {data ? "Veg" : "Non-Veg"}
                            </button>
                        )
                    })}
                    <button className='btn-group__item'
                        onClick={() => setRestaurantData(RestaurantApi)}>
                        All
                    </button>

                </div>
                <Link to='/cart'>
                    <ShoppingCartIcon fontSize='large' className='cart_icon'></ShoppingCartIcon>
                </Link>
            </nav>
        </>
    )
}

export default Navbar