import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams()
    const { data: product, isLoading } = useQuery(['product', id], () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()))

    if (isLoading) {
        return;
    }
    console.log(product)
    return (
        <div style={{minHeight:'100vh'}}>
            <h1>{id}</h1>
        </div>
    );
};

export default Product;
