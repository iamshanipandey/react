import React from 'react';
import './Products.css';
import Cards from './Cards';

const Products = (props) => {
    return (
    <Cards className = 'products'>
        <ProductItem>
            title = {props.items[0].title}
        </ProductItem>
    </Cards>)
}

export default Products;