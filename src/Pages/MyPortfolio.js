import React from 'react';
import person from '../Images/person.jpg'
import project1 from '../Images/project.png'
import project2 from '../Images/project2.png'
import project3 from '../Images/project3.png'
import PageTittle from '../PageTittle/PageTittle';

const MyPortfolio = () => {
    return (
        <div className='mb-5'>
            <PageTittle location="Bike Manufacturers - Myportfolio"></PageTittle>
              <div className='flex justify-center items-center my-5' style={{minHeight:'100vh'}}>
            <div className=' py-5 lg:w-2/4 md:w-3/4 w-full shadow-2xl rounded-md'>
                <div className='w-2/4 mx-auto'>
                    <img src={person} className='w-52 rounded-full flex mx-auto' alt="" />
                </div>
        <div class="card w-3/4 mx-auto text-primary-content">
         <div class="card-body text-black">
         <h2 class="card-title   text-2xl">Name: <span className='text-2xl uppercase font-bold text-primary'>Sayman Rabbi</span></h2>
                        <p className='text-2xl font-bold'>Email: <span className='text-2xl font-bold text-primary'>mdrabbi.asm@gmail.com</span></p>
                        <span className=' uppercase w-fit' style={{ borderBottom: '2px solid black' }}>educational background</span>
                        <li>Rangpur Govt. College | Degree First Year in (BSC)</li>
                        <li>Rangpur Govt. College | Intermediate (2016-2018)</li>
                        <p className=' font-bold'>Additional Courses</p>
                        <li>Complete Web Development Course With Jhankar Mahbub</li>
                        <p className='text-2xl font-bold'>SKILLS:</p>
                        <p className='text-xl font-bold'>Expertise</p>
                        <li>JavaScript, ES6, DOM, REST API, React JS, Bootstrap v5.0,
                            HTML5, CSS3</li>
                        <p className='text-xl font-bold'>Comfortable</p>
                        <li>Node Js, MongoDB, Firebase, Tailwind CSS, Express Js</li>
                        <p className='text-xl font-bold'>Tools</p>
                        <li>Vs Code, Github, Chrome Dev Tools, Netlify, Heroku, Figma, Postman, npm</li>
                </div>
               </div>
           </div>
            </div>
            <h3 className='text-3xl text-center mt-5 mb-2 font-bold text-primary'>My Project</h3>
            <small className='text-center block  font-bold'>Click image And Go to Live</small>
               <div className='px-5 grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='h-52 overflow-scroll'>
                    <a href='https://assignment-11-c3aa0.web.app/' target="_blank" rel="noreferrer">
                    <img src={project1} className='w-full' alt="" />
                    </a>
                </div>
                <div className='h-52 overflow-scroll'>
                    <a href='https://skill-test-3664a.web.app/' target="_blank" rel="noreferrer">
                        <img src={project2} className='w-full' alt="" />
                        </a>
                </div>
                <div className='h-52 overflow-scroll'>
                    <a href='https://saymanrabbi.github.io/Clone-netlifly/index.html' target="_blank" rel="noreferrer">
                        <img src={project3} className='w-full' alt="" />
                        </a>
                </div>
              </div>
            </div>
    );
};

export default MyPortfolio;