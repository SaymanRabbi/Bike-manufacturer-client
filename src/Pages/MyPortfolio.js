import React from 'react';
import person from '../Images/person.jpg'
import project1 from '../Images/project.png'
import project2 from '../Images/project2.png'
import project3 from '../Images/project3.png'

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center my-5' style={{minHeight:'100vh'}}>
            <div className=' py-5 lg:w-2/4 md:w-3/4 w-full shadow-2xl rounded-md'>
                <div className='w-2/4 mx-auto'>
                    <img src={person} className=' w-32 rounded-full flex mx-auto' alt="" />
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
                        <div className='grid grid-cols-3'>
                            <div className='mx-auto'>
                            <h1 className=' text-base font-bold lowercase'>MEN'S PERFEUM <a  className='link text-primary' href='https://assignment-11-c3aa0.web.app/'>Live</a></h1>
                            <img src={project1} className=' h-40 flex mx-auto' alt="" />
                        </div>
                            <div className='mx-auto'>
                            <h1 className='text-base font-bold lowercase'>Task manager <a className=' link text-primary' href='https://skill-test-3664a.web.app/'>live</a></h1>
                            <img src={project2} className=' h-40 flex mx-auto' alt="" />
                        </div>
                            <div className='mx-auto'>
                            <h1 className='text-base font-bold lowercase'>Clone Netlify <a className=' link text-primary' href='https://saymanrabbi.github.io/Clone-netlifly/index.html'>live</a></h1>
                            <img src={project3} className=' h-40 felx mx-auto' alt="" />
                        </div>
                        </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default MyPortfolio;