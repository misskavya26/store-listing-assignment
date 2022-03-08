import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCartAction, singleItemAction } from '../React-Redux/Action/CartAction';

const Card = ({ restaurantData }) => {

    const dispatch = useDispatch();

    const getSingleData = (item) => {
        dispatch(singleItemAction(item))
    }

    const deleteData = (id) => {
        dispatch(removeFromCartAction(id));
        alert('Item Deleted Successfully');
    }

    return (
        <>
            <section className="main-card--cointainer">

                {restaurantData && restaurantData.map((data) => {

                    const { id, name, description, isVeg, rating, price, img_url } = data

                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{isVeg ? "Veg" : "Non-Veg"}</span>
                                        <h2 className="card-title"> {name} </h2>
                                        <span className="card-description subtle">
                                            {description}
                                        </span>
                                        <div className="card-read">Price: ₹ {price}</div>
                                    </div>
                                    <img src={img_url} alt={img_url} className="card-media" />
                                    <span className="card-author-rating subtle">Rating: {rating}</span>

                                    <Link to={`/product/${id}`}>
                                        <span className="card-tag  subtle" onClick={() => getSingleData(data)}><AddIcon /></span>
                                    </Link>
                                    <span className="card-tag  subtle" onClick={() => deleteData(id)}><RemoveIcon /></span>
                                </div>
                            </div>

                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Card