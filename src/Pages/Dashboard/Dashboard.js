import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [admin] = useAdmin()
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content items-center justify-center">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-primary my-5 font-bold text-center'>Welcome To Your DashBoard</h2>
                <Outlet></Outlet>
    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
            {
              !admin && <>
              <li><Link to='/dashboard/orders'>My Orders</Link></li>
            <li><Link to='/dashboard/review'>Add A Review</Link></li>
              <li><Link to='/dashboard'>My Profile</Link></li>
              </>
            }
            {
              admin && <>
              <li><Link to='/dashboard/admin'>Admin</Link></li>
            <li><Link to='/dashboard/managesproducts'>Manages Products</Link></li>
              <li><Link to='/dashboard'>My Profile</Link></li>
              <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
              <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
              </>
          }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;