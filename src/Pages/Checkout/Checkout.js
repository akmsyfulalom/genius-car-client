import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(authContext);


    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value} `;
        const mobile = form.mobile.value;
        const email = user?.email || 'unregistered'
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customerName: name,
            email,
            mobile,
            message
        }
        // if (mobile.length > 10) {
        //     alert('phone number should be 10 character or longer')
        // }
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Order placed successfully done!!');
                    form.reset()
                }

            })
            .catch(err => console.error(err))
    }

    return (
        <div className='mx-2 my-3'>
            <form onSubmit={handlePlaceOrder} >
                <h1 className='text-4xl font-semibold '>You are about to order: {title}</h1>
                <h3 className='text-xl font-semibold my-2'>Price: {price}</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" name='firstName' placeholder="First name" className="input w-full input-bordered" required />
                    <input type="text" name='lastName' placeholder="Last name" className="input w-full input-bordered" required />
                    <input type="text" name='mobile' placeholder="Your phone" className="input w-full input-bordered" required />
                    <input type="text" name='email' placeholder="Email" defaultValue={user?.email} className="input w-full input-bordered" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full my-4" placeholder="Your message" required></textarea>

                <button className="btn btn-warning bg-orange-500 border-orange-600 hover:bg-orange-400 hover:border-orange-400 "><input type="submit" value="Place your order" /></button>

            </form>
        </div>
    );
};

export default Checkout;