import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Reademore = () => {
    const {id} =useParams()
    const { data: blogdata, isLoading } = useQuery(['blogdata', id], () => fetch(`https://assignment12bike.herokuapp.com/blog/${id}`).then(res => res.json()))
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
                <p className='px-20 text-justify mt-5'>
                    {text}
                </p>
           </div>
        </div>
    );
};

export default Reademore;