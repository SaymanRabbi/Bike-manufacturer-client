import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Reademore = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const {id} =useParams()
    const { data: blogdata, isLoading } = useQuery(['blogdata', id], () => fetch(`http://localhost:5000/blog/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const {image,question,text} = blogdata
    return (
        <div className='' style={{minHeight:'100vh'}}>
            <div>
                <img src={image} className='w-2/4 flex mx-auto mt-10 rounded' alt="" />
                <h2 className='px-3 mt-10 font-bold uppercase text-center'>
                    {question}
                </h2>
                <p className='text-center'>
                    {text}
                </p>
           </div>
        </div>
    );
};

export default Reademore;