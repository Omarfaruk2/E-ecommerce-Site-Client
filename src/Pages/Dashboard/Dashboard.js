import { Icon } from '@iconify/react'
import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="Dashboard-SIdebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <p className='text-3xl text-center'>Dashboard</p>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="Dashboard-SIdebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard"><Icon icon="healthicons:ui-user-profile" /> My Profile</Link></li>

                    {/* {!admin && */}
                    <>
                        <li><Link to="/dashboard/alluser"><Icon icon="icon-park-solid:transaction-order" /> All User</Link></li>
                        <li><Link to="/dashboard/addreview"><Icon icon="carbon:review" />Review</Link></li>
                    </>
                    {/* } */}
                    {/*                     
                    {admin &&
                        <>
                            <li><Link to="/dashboard/additem"><Icon icon="bxs:add-to-queue" />Add Item</Link></li>
                            <li><Link to="/dashboard/allOrder"><Icon icon="fluent:select-all-off-24-filled" />All Order</Link></li>
                            <li><Link to="/dashboard/alluser"><Icon icon="fa-solid:users" />All User</Link></li>
                            <li><Link to="/dashboard/manageitems"><Icon icon="ic:baseline-manage-accounts" />Manage Items</Link></li>
                        </>
                    }  */}

                </ul>

            </div>
        </div>
    )
}

export default Dashboard