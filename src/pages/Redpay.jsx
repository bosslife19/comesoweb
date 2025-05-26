import React, { useState } from 'react';

// Assume RedPayPop is globally available via a script tag in HTML
// and doesn't need importing here.

function Redpay() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 7000) {
      alert('Transaction limit is 5 dollars');
      return;
    }

    const handler = window.RedPayPop.setup({
      key: import.meta.env.VITE_REDPAY_PUBLIC, // Replace with your actual public key
      email: email,
      amount: amount * 100,
      onClose: function () {
        console.log('Window closed.');
        window.location.href="/redpay/failed"
      },
      callback: function (response) {
        console.log(response);
        window.location.href="/redpay/success"
      },
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Pay with Redpay</h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setAmount(Number(e.target.value))}
            
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Redpay;
