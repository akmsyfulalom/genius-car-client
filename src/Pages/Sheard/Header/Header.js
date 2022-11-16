
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { authContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { user, LogOut } = useContext(authContext);
    const menuItems = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        {
            user?.email &&

            <li className='font-semibold'><Link to="/orders">Orders</Link></li>

        }

    </>

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.succss('LogOut success')
            })
            .catch(err => console.error(err))

    }
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        {
                            user?.uid ? <>




                                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>

                            </>
                                :
                                <>
                                    <li className='font-semibold'><Link to="/login">Login</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {
                        user?.uid ? <>
                            <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>

                        </>
                            :
                            <>
                                <li className='font-semibold'><Link to="/login">Login</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>

        </div>
    );
};

export default Header;