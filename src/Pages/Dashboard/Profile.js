import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Profile = () => {
    const [user] = useAuthState(auth)
    const { data: userdata, isLoading } = useQuery('user', () => fetch(`http://localhost:5000/profiledata?useremail=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
          return <Loading></Loading>
    }
    
    return (
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold'>Wecome Your Profile {user?.displayName}</h2>
            <div className=' py-5 rounded mt-5   lg:w-3/4 mx-auto bg-slate-300'>
                <div className='w-2/4 mx-auto py-3'> 
                <img src={user?.photoURL?user?.photoURL:'https://i.ibb.co/PhHRTcd/download.jpg'} alt="" className='flex mx-auto w-40 rounded-full' />
                </div>
                <div className='w-3/4 mx-auto py-3  text-primary'>
                    <h2><span className=' font-bold'>LinkDin Profile Link</span> : {userdata?.Linkdin?<span className='link'>{userdata?.Linkdin}</span>:'Please Add A link'}</h2>
                    <h2><span className=' font-bold'>Education</span> : {userdata?.education?userdata?.education:'Please Add Your Information'}</h2>
                    <h2><span className=' font-bold'>Location</span> : {userdata.location?userdata.location:'Add Loacation'}</h2>
                    <h2><span className=' font-bold'>Phone Number</span> : {userdata?.Number ? userdata?.Number : 'Plaease Add Phone Number'}</h2>
                    <Link to={`/dashboard/profile/${userdata._id}`}>
                    <button className='text-center btn btn-primary mt-4'>update profile</button></Link>
                </div>
            </div>
        
          

        </div>
    );
};

export default Profile;