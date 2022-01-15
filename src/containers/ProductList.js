import React, { useEffect, useState } from 'react'
import{ useSelector, useDispatch} from "react-redux"
import { setProducts } from "../containers/redux/actions/productActions"
import ProductComponent from './ProductComponent';
import axios from 'axios';
import Search from './Search';

function ProductList() {
    const products  = useSelector((state) => state);
    const dispatch  = useDispatch()

    const [searchValue, setSearchValue] = useState('');

    const fetchProducts = async ( searchValue) => {
     

        const response = await axios
        .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=65e5b929`)
        .catch((err) => {
            console.log("Err", err);
        });
        if(response.data.Search){
            dispatch(setProducts(response.data.Search));
        }
    };

    useEffect(() => {
        fetchProducts(searchValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchValue]);

    console.log("Products: " , products)
    
    return (
        <div className='home'>
            <div className='search-box'>
                    <input 
                    value={searchValue} onChange={(e) => setSearchValue(e.target.value)} 
                    type="text" 
                    placeholder="Search.." 
                    >        
                    </input>
            </div>
            <div className='products-list'>
            <ProductComponent /> 
            </div>
        </div>
    )
}

export default ProductList
