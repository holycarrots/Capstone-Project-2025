import React from 'react'
// import Card from './Card'
// import ProductData from '../api/data'
import Data from '../api/data'
// import axios from 'axios'
import { useState } from 'react';
import Plans from './Plans';
export default function Product() {

    const[plans,setPlans]= useState(Data);

    // const CheckoutHandler = async ({ name, amount }) => {
    //     const { data: { order } } = await axios.post("http://localhost:5000/payment/checkout", {
    //         name, amount
    //     })

    //     var options = {
    //         "key": "rzp_test_4vH2Yp0UzIbsOh",
    //         "amount": order.amount,
    //         "currency": order.currency,
    //         "name": "Udyog Sarthi",
    //         "description": "Test Transaction",
    //         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s",
    //         "order_id": order.id,
    //         "callback_url": "http://localhost:5000/payment/payment-verification",
    //         "prefill": {
    //             "name": "Guarav",
    //             "email": "abc@gmail.com",
    //             "contact": "7737973298"
    //         },
    //         "notes": {
    //             "address": "Razorpay Corporate Office"
    //         },
    //         "theme": {
    //             "color": "#3399cc"
    //         }

    //     };

    //     var rzp1 = new window.Razorpay(options);
    //     rzp1.open();

    //     console.log({ order });
    // }


    return (
        <>
            <div className="Appb02" style={{ backgroundColor: "white" }}>
                <Plans plans={plans}/> 
            </div>
            
        </>
    )
}
