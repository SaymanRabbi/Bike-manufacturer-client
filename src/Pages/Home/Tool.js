import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    
    const { name, description, quantity, price, image, minquantity } = tool
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl mx-auto" id='anchor'>
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
            <div className="badge badge-secondary">{quantity>70?'NEW':''}</div>
            </h2>
                <p>{(description).slice(0,100)}</p>
                <div className="card-actions">
                <div className="badge badge-outline text-primary ">Price: ${price}</div>
                    <div className="badge badge-outline">Avilabel: {quantity}</div> 
            <div className="badge badge-outline">Minumum Buy: {minquantity}</div>
            
                    
          </div>
          <Link className=' w-fit' to={`/product/${tool._id}`}><button className='btn btn-primary mt-5' disabled={quantity<minquantity}>buy now</button></Link>
  </div>
</div>
    );
};

export default Tool;