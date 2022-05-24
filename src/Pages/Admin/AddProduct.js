import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset
      } = useForm();
    // "name":"Stockton Universal Oil Filter Wrench",
// "description":"Stockton Universal Oil Filter Wrench. A must have tool for the do-it-yourself mechanic. Features: Universal design is auto adjusting to fit most oil filters",
// "quantity":100,
// "price":25,
// "image":"https://i.ibb.co/gRnS1Jh/stockton-universal-oil-filter-wrench-300x300.jpg",
// "minquantity":5
const imageStroageKey ="5fffcbe84005cc248e45eb64e99cb950";
const Updateproduct = (data) => {
    const formData = new FormData();
    const image = data.image[0]; 
    formData.append("image", image);
    console.log(formData);
    const url = `https://api.imgbb.com/1/upload?key=${imageStroageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
        .then((result) => {
          if (result.success) {
          const img = result.data.url;
          const Product= {
              name: data.name,
              quantity: data.quantity,
              price: data.price,
              image: img,
              description:data.description,
              minquantity:data.minquantity
          }
          fetch('https://assignment12bike.herokuapp.com/addproduct', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(Product)
          }).then(res => res.json()).then(data => {
            if (data.insertedId) {
              toast.success('Product Added SucessFully')
              reset()
            }
          })
        }
      });  
    reset()
              
}
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:w-2/4 mx-auto md:w-3/4 w-full">
<div className="card flex-shrink-0  w-full shadow-2xl bg-base-100">
  <div className="card-body">
                    <form action="" onSubmit={handleSubmit(Updateproduct)}>
                    <div className="form-control mb-3">
               <input type="text" placeholder='Product Name'  {...register("name",{ required: true})} className="input input-bordered" required/>
              </div>
    <div className="form-control  mb-3">
      <input type="file" {...register("image",{ required: true})} required/>
    </div>
    <div className="form-control mb-3">
      <input type="number" placeholder='Product Quentity'  {...register("quantity",{ required: true})} className="input input-bordered"/>
     </div>
    <div className="form-control mb-3">
     </div>
     <div className="form-control mb-3">
      <input type="number" placeholder='Product Price' {...register("price",{ required: true})}  className="input input-bordered" required/>
     </div>
     <div className="form-control mb-3">
      <input type="number" placeholder='Minumum Product Quentity' {...register("minquantity",{ required: true})}  className="input input-bordered" required/>
     </div>
     <div className="form-control mb-3">
      <textarea type="number" placeholder='Product Discription' {...register("description",{ required: true})}  className="input input-bordered" required/>
     </div>
                        <div className="form-control mt-6">
      <button className="btn btn-primary">Add Product</button>
    </div>
    </form>
  </div>
</div>
</div>
   </div>
    );
};

export default AddProduct;
