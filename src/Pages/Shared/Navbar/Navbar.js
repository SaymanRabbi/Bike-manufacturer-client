import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin()
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('token')
  };
    return (
        <div className="navbar  bg-slate-900">
  <div className=" w-full">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white  bg-slate-900">
        <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              {
               user&&<li><NavLink to='/dashboard'>Dashboard</NavLink></li>
              }
             {
               user? <li><p>{user.displayName}</p></li>:''
            }
              {
               user?<li><NavLink to='/login' onClick={logout}>Logout</NavLink></li>:<li><NavLink to='/login'>login</NavLink></li>
              }
              
            </ul>
            
    </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Bike Manufacturers</Link>
          <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn m-auto btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 gap-3 text-white">
    <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            {
               user&&<li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            }
            {
               user? <li><p>{user.displayName}</p></li>:''
            }
            {
               user?<li><NavLink to='/login' onClick={logout}>Logout</NavLink></li>:<li><NavLink to='/login'>login</NavLink></li>
              }
             
    </ul>
  </div>
</div>
    );
};

export default Navbar;