import React from 'react';
import { useParams } from 'react-router-dom';

const UserupdateForm = () => {
    const { id } = useParams()
    console.log(id)
    const Updateprofile = (event) => {

            event.preventDefault();
            const education = event.target.education.value;
            const location = event.target.location.value;
            const Number = event.target.phone.value;
        const Linkdin = event.target.Linkdin.value;
        const data = {
            education,
            location,
            Number,
            Linkdin
        }
        fetch(`http://localhost:5000/profiledata/${id}`, {
            method: "PUT",
           
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Barer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify(data)
        }).then(res=>res.json()).then(data=>console.log(data))
    
}
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row lg:w-3/4 mx-auto md:w-3/4 w-full">
<div class="card flex-shrink-0 flex-1 w-full shadow-2xl bg-base-100">
  <div class="card-body">
                    <form action="" onSubmit={Updateprofile}>
                    <div class="form-control mb-3">
      <input type="text" name='education' placeholder='education' class="input input-bordered" required/>
    </div>
                    <div class="form-control  mb-3">
      <input type="text"name='location' placeholder='Your Location' class="input input-bordered" required/>
    </div>

    <div class="form-control mb-3">
     </div>
     <div class="form-control mb-3">
      <input type="number" placeholder='Phone Number' name='phone'  class="input input-bordered" required/>
                        </div>
    <div class="form-control mb-3">
      <input type="text" placeholder='Your LinkedIn Link' name='Linkdin' class="input input-bordered" required/>
    </div>
    <div class="form-control mb-3">
                        </div>
                        
                        <div class="form-control mt-6">
      <button class="btn btn-primary">Edit profile</button>
    </div>
    </form>
  </div>
</div>
</div>
   </div>
    );
};

export default UserupdateForm;
