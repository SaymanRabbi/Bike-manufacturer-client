import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Blog = () => {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const { data: blog, isLoading } = useQuery('blog', () => fetch('https://assignment12bike.herokuapp.com/blog').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div style={{minHeight:'100vh'}}>
            <h2 className='lg:text-5xl md:text-3xl text-xl font-bold uppercase text-center mt-10'><span className=' w-fit' style={{borderBottom:'3px solid black'}}>Blog</span> </h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10'>
                {
                    blog.map(data=><div key={data._id} class="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={data.image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 className=' font-bold'>{data.question}</h2>
                            <p>{(data.text).slice(0, 200) + '...'}</p>
                            <span>Author :Sayman Rabbi {date}</span>
                        </div>
                        <Link className='btn btn-primary ' to={`/readmore/${data._id}`}>
                        <button className='flex gap-2'>Read More <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></button>
                        </Link>
                  </div>)
               }
            </div>
        </div>
    );
};

export default Blog;