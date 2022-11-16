import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../../../assets/images/login/login.svg'
import { authContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const { userLogin, providerLogin } = useContext(authContext);

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                navigate('/')
                toast.success('user successfully Login!!!')
                console.log(user)

            })
            .then(error => {
                toast.error(error.message)
                console.log('user login error', error);
            })
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                navigate('/')
                toast.success('user successfully Login!!!')
                console.log(user)
            })
            .then(error => {
                toast.error(error.message)
                console.log('user login error', error);
            })

    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary bg-orange-500 border-orange-600 hover:bg-orange-400 hover:border-orange-400' type="submit" value="Login" />
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline  bg-orange-500 border-orange-600 hover:bg-orange-400 hover:border-orange-400 text-white"><FaGoogle className='pr-1 text-xl'></FaGoogle> Login With Google</button>


                        <p>New to Genius car <Link to="/signup" className='text-orange-600 font-bold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;