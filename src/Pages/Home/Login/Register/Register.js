import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../../../../assets/images/login/login.svg'
import { authContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(authContext);
    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        createUser(email, password, name)
            .then((result) => {
                const user = result.user;
                form.reset()
                navigate('/')
                console.log(user)
                toast.success('Successfully create a account!!')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })

    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={signUpImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignUp} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary bg-orange-500 border-orange-600 hover:bg-orange-400 hover:border-orange-400' type="submit" value="Login" />
                            </div>
                        </form>
                        <p>Already have an account <Link to="/login" className='text-orange-600 font-bold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;