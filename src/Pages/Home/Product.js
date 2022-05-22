import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Product = () => {
    const [inputquentity, setInputQuentity] = useState(0)
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const { data: product, isLoading } = useQuery(['product', id], () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>;
    }
    const { name,quantity, price, image, minquantity } = product
        const quentityValue = parseInt(inputquentity)
        const productquentity = parseInt(quantity)
        const minquantityvalue = parseInt(minquantity)
        const Updateproduct = (event) => {
        event.preventDefault();
        if (quentityValue > productquentity) {
            return toast.error(`Value Leages Than ${productquentity}`)
        }
        if (quentityValue < minquantityvalue) {
            return toast.error(`Value Larges Than ${minquantityvalue}`)
        }
        else {
            const name = event.target.name.value;
            const email = event.target.email.value;
            const productName = event.target.productName.value;
            const phone = event.target.phone.value;
            const address = event.target.address.value;
            const productPrice = quentityValue * parseInt(price)
            const product = {
                name,email,productName,phone,address,productPrice
            }
            const productupdate = productquentity - quentityValue;

           //post user product
            fetch('http://localhost:5000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({product})
            }).then(res => res.json()).then(data => {
                if (data.success) {
                    toast.success('success')
                }
            })
            //update product
            fetch(`http://localhost:5000/product/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({quantity:productupdate})
            }).then(res => res.json()).then(data => {
                if (data.success) {
                    toast.success('Product Add Your Card')
                }
            })
            event.target.reset()
        
            }
            
      }
    return (
        
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row lg:w-3/4 mx-auto md:w-3/4 w-full">
            <div class="flex-1 rounded">
             <img src={image} className='w-full' alt="" />
    </div>
    <div class="card flex-shrink-0 flex-1 w-full shadow-2xl bg-base-100">
      <div class="card-body">
                        <form action="" onSubmit={Updateproduct}>
                        <div class="form-control mb-3">
          <input type="text" value={user?.displayName} name='name' class="input input-bordered" readOnly/>
        </div>
                        <div class="form-control  mb-3">
          <input type="email" value={user?.email} name='email' class="input input-bordered" readOnly/>
        </div>
        <div class="form-control mb-3">
          <input type="text" value={name} name='productName' class="input input-bordered" readOnly/>
                            </div>
         <div class="form-control mb-3">
          <input type="number" placeholder='Phone Number' name='phone'  class="input input-bordered" required/>
                            </div>
        <div class="form-control mb-3">
          <textarea type="text" placeholder='Your Address' name='address' class="input input-bordered" required/>
        </div>
        <div class="form-control mb-3">
          <input type="number" placeholder={`Minimun Add ${minquantity} Product`}  class="input input-bordered" onChange={(e)=>setInputQuentity(e.target.value)}  required/>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary" disabled={quentityValue<minquantityvalue||quentityValue>productquentity}>Confirm Order</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Product;
