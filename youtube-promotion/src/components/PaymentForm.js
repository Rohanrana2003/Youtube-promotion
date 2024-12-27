// import React from 'react';
// import axios from 'axios';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../utils/FirebaseConfig'; // Make sure this path matches your folder structure

// const PaymentForm = () => {
//   const loadRazorpay = () => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.onload = () => openRazorpay();
//     document.body.appendChild(script);
//   };

//   const openRazorpay = async () => {
//     try {
//       // Make a call to your backend to create an order
//       const { data: order } = await axios.post('http://localhost:5000/payment/orders');

//       const options = {
//         key: 'YOUR_RAZORPAY_KEY',
//         amount: order.amount,
//         currency: order.currency,
//         name: 'Your App',
//         description: 'Test Transaction',
//         order_id: order.id,
//         handler: async function (response) {
//           alert('Payment successful');
//           console.log(response);

//           // After successful payment, save the payment details to Firebase
//           try {
//             await addDoc(collection(db, 'payments'), {
//               order_id: response.razorpay_order_id,
//               payment_id: response.razorpay_payment_id,
//               signature: response.razorpay_signature,
//               amount: order.amount,
//               currency: order.currency,
//               status: 'success',
//               createdAt: new Date(),
//             });
//             console.log('Payment details saved successfully');
//           } catch (error) {
//             console.error('Error saving payment details:', error);
//           }
//         },
//         prefill: {
//           name: 'John Doe',
//           email: 'john.doe@example.com',
//           contact: '9999999999',
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (error) {
//       console.error('Error creating Razorpay order:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <button onClick={loadRazorpay} className="bg-blue-500 text-white py-2 px-4 rounded">
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default PaymentForm;
