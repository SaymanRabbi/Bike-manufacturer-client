import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyComponent from './Rating';
const Review = () => {
  const [ratings, setRatings] = useState(0)
    const {
        register,
        handleSubmit,
        reset
      } = useForm();
    const [user] = useAuthState(auth)
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
              console.log(result)
              if (result.success) {
                // console.log(object)
              const img = result.data.url;
              const review= {
                name: data.name,
                rating: ratings,
                text: data.feedback,
                image:img
              }
              fetch('https://assignment12bike.herokuapp.com/review', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(review)
              }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                  toast.success('Review Added SucessFully')
                  reset()
                }
              })
            }
          });  
        reset()
                  
    }
    return (
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row lg:w-2/4 mx-auto md:w-3/4 w-full">
    <div className="card flex-shrink-0 w-full shadow-2xl ">
      <div className="card-body">
                        <form action="" onSubmit={handleSubmit(Updateproduct)}>
                        <div className="form-control mb-3">
                                <input type="text" value={user?.displayName} {...register("name",{ required: true})} readOnly/>
       </div>
        
        
         <div className="form-control mb-3">
         <MyComponent setRatings={setRatings}></MyComponent>
                </div>
                <div className="form-control mb-3">
          <input type="file" {...register("image",{ required: true})} className=' w-60' required/>
        </div>
        <div className="form-control mb-3">
          <textarea type="text" placeholder='Write Your Some Feedback' {...register("feedback",{ required: true})} className="input input-bordered" required/>
        </div>
       
        <div className="form-control mb-3">
          
                            </div>
                            
                            <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit Review</button>
                 
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Review;