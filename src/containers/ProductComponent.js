import React from 'react'
import{ useSelector } from "react-redux"
import { Link } from 'react-router-dom';

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product, index) => {
      const { imdbID: id, Title, Type, Year, Poster } = product;
        return (
            <Link to={`/product/${id}`}  key={index}>
                <div className='card' key={index}>
                    <img src={Poster} alt={Title}></img>
                    <div className='card-content'>
                        <h2 className='title'>Title: {Title}</h2>
                        <p>Type: {Type}</p>
                        <p>Year: {Year}</p>
                    </div>
                </div>
            </Link>
            );
        });
            return <>{renderList}</>;
}

export default ProductComponent
