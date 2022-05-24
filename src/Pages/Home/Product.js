import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Product = () => {
    const [inputquentity, setInputQuentity] = useState(0)
    const [error,setError] = useState('')
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const { data: product, isLoading } = useQuery(['product', id], () => fetch(`https://assignment12bike.herokuapp.com/product/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    const { name,quantity, price, image, minquantity } = product||{}
    const quentityValue = parseInt(inputquentity)
    const productquentity = parseInt(quantity)
    const minquantityvalue = parseInt(minquantity)
    useEffect(() => {
        if (quentityValue > productquentity) {
            setError(`Maximu Buy ${productquentity} Products`)
        }
        else if (quentityValue < minquantityvalue) {
            setError(`Minimum Buy ${minquantityvalue} Products`)
        }
        else {
            setError('')
        }
    }, [quentityValue, minquantityvalue, productquentity])
    if (isLoading) {
        return <Loading></Loading>;
    } 
    //get data from
        const Updateproduct = (event) => {
        event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const productName = event.target.productName.value;
            const phone = event.target.phone.value;
            const address = event.target.address.value;
            const productPrice = quentityValue * parseInt(price)
            const product = {
                name,email,productName,phone,address,productPrice,quentityValue
            }
            const productupdate = productquentity - quentityValue;
           //post user product
            fetch('https://assignment12bike.herokuapp.com/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Barer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify({product})
            }).then(res => res.json()).then(data => {
                // navigate('dashboard/orders')
            })
            //update product
            fetch(`https://assignment12bike.herokuapp.com/product?id=${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Barer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify({quantity:productupdate})
            }).then(res => res.json()).then(data => {
                if (data.success) {
                    toast.success('Product Add Your Card')
                }
            })
            event.target.reset()   
                  
    }
    
    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:w-3/4 mx-auto md:w-3/4 w-full">
            <div className="flex-1 rounded">
             <img src={image} className='w-full' alt="" />
    </div>
    <div className="card flex-shrink-0 flex-1 w-full shadow-2xl bg-base-100">
      <div className="card-body">
                        <form action="" onSubmit={Updateproduct}>
                        <div className="form-control mb-3">
          <input type="text" value={user?.displayName} name='name' className="input input-bordered" readOnly/>
        </div>
                        <div className="form-control  mb-3">
          <input type="email" value={user?.email} name='email' className="input input-bordered" readOnly/>
        </div>
        <div className="form-control mb-3">
          <input type="text" value={name} name='productName' className="input input-bordered" readOnly/>
         </div>
        <div className="form-control mb-3">
                                <p className='text-xl text-primary'>Avilabel Product {productquentity}</p>
         </div>
         <div className="form-control mb-3">
          <input type="number" placeholder='Phone Number' name='phone'  className="input input-bordered" required/>
                            </div>
        <div className="form-control mb-3">
          <textarea type="text" placeholder='Your Address' name='address' className="input input-bordered" required/>
        </div>
        <div className="form-control mb-3">
          <input type="number" placeholder={`Minimun Add ${minquantity} Product`}  className="input input-bordered" onChange={(e)=>setInputQuentity(e.target.value)}  required/>
                            </div>
                            {quentityValue?<p className='text-red-500 '><span>{error}</span></p>:''}
                            <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={quentityValue<minquantityvalue||quentityValue>productquentity}>Confirm Order</button>
        </div>
        </form>
      </div>
    </div>
  </div>
       </div>
    );
};

export default Product;
