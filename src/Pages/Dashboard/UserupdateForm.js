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
        fetch(`https://assignment12bike.herokuapp.com/profiledata/${id}`, {
            method: "PUT",
           
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Barer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify(data)
        }).then(res=>res.json()).then(data=>console.log(data))
    
}
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:w-3/4 mx-auto md:w-3/4 w-full">
<div className="card flex-shrink-0 flex-1 w-full shadow-2xl bg-base-100">
  <div className="card-body">
                    <form action="" onSubmit={Updateprofile}>
                    <div className="form-control mb-3">
      <input type="text" name='education' placeholder='education' className="input input-bordered" required/>
    </div>
                    <div className="form-control  mb-3">
      <input type="text"name='location' placeholder='Your Location' className="input input-bordered" required/>
    </div>

    <div className="form-control mb-3">
     </div>
     <div className="form-control mb-3">
      <input type="number" placeholder='Phone Number' name='phone'  className="input input-bordered" required/>
                        </div>
    <div className="form-control mb-3">
      <input type="text" placeholder='Your LinkedIn Link' name='Linkdin' className="input input-bordered" required/>
    </div>
    <div className="form-control mb-3">
                        </div>
                        
                        <div className="form-control mt-6">
      <button className="btn btn-primary">Edit profile</button>
    </div>
    </form>
  </div>
</div>
</div>
   </div>
    );
};

export default UserupdateForm;
