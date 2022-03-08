import React, { useState } from 'react'
import './Restaurant.css';
import RestaurantApi from '../RestaurantApi';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';

const uniqueData = [...new Set(RestaurantApi.map((elem) => {
    return elem.isVeg;
})),];

const Restaurant = () => {

    const cart = useSelector((state) => state.cart);
    const { products } = cart;

    const [restaurantData, setRestaurantData] = useState(products);
    const [uniqueList, setUniqueList] = useState(uniqueData);
    // console.log(restaurantData);

    const filterItem = (isVeg) => {

        const updatedData = RestaurantApi.filter((data) => {
            return data.isVeg === isVeg;
        })
        setRestaurantData(updatedData);
    }


    return (
        <>
            <Navbar filterItem={filterItem} uniqueList={uniqueList} setRestaurantData={setRestaurantData} RestaurantApi={RestaurantApi}  />
            <Card restaurantData={restaurantData} />

        </>
    )
}

export default Restaurant