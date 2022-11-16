import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';


const Orders = () => {
    const { user } = useContext(authContext);
    const [orders, setOrders] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleOrderDelete = id => {
        const procced = window.confirm(`Are you sure you want to cancel this order`);
        if (procced) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Your order has been canceled')
                    }
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining)
                })
        }

    }
    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== odr.id);
                    const approving = orders.find(odr => odr._id === odr.id);
                    approving.status = 'Approved'
                    const newOrder = [approving, ...remaining]
                    setOrders(newOrder);
                }
            })

    }


    return (
        <div>
            <h1 className='text-4xl font-semibold'>You have {orders.length} Orders</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleOrderDelete={handleOrderDelete}
                                handleStatusUpdate={handleStatusUpdate}

                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;