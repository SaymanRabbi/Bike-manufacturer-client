import React from 'react';

const Tool = ({ tool }) => {
    
    const { name, description, quantity, price, image, minquantity } = tool
    console.log(image)
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {name}
      <div class="badge badge-secondary">NEW</div>
    </h2>
                <p>{(description).slice(0,100)}</p>
                <div class="card-actions justify-end">
                <div class="badge badge-outline text-primary">Price: {price}</div>
                    <div class="badge badge-outline">Avilabel: {quantity}</div> 
                    <div class="badge badge-outline">Minumum Buy: {minquantity}</div>
                    
    </div>
  </div>
</div>
    );
};

export default Tool;