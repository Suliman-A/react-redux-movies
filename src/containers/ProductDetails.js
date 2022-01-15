import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from './redux/actions/productActions';

function ProductDetails() {
    const product = useSelector(state => state.product)
    const { Title, Type, Plot, Genre, Poster } = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    
    console.log(product);
    const fetchProductDetails = async () => {
        const response = await axios
        .get(`http://www.omdbapi.com/?i=${productId}&apikey=65e5b929`)
        .catch((err) => {
            console.log("Err", err);
        });

        dispatch(selectedProduct(response.data))
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div className="home">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
            <div className="product-details">
            <div className="product-content">
                <h1>{Title}</h1>
                <p>{Type}</p>
                <h3>Genre: {Genre}</h3>
                <p> Plot: {Plot}</p>
            </div>
            <img src={Poster} alt="" />
            </div>
            )}
        </div>
    )
}

export default ProductDetails
