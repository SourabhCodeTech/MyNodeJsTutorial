import React from 'react';

const Order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              CODESWEAR.COM
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Order Id: #227838
            </h1>
            <p className="leading-relaxed mb-4">
              Your Order has Successfully Placed
            </p>
            <div className="flex mb-4">
              <a className="flex-grow text-right text-pink-500 py-2 text-lg px-1">
                Item Description
              </a>
              <a className="flex-grow text-right border-gray-300 py-2 text-lg px-1">
                Quantity
              </a>
              <a className="flex-grow text-right border-gray-300 py-2 text-lg px-1">
                Item Total
              </a>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the Code(XL, Blue)</span>
              <span className="ml-0 text-gray-900">1</span>
              <span className="ml-0 text-gray-900">499</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the Code(XL, Blue)</span>
              <span className="ml-0 text-gray-900">1</span>
              <span className="ml-0 text-gray-900">499</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Wear the Code(XL, Blue)</span>
              <span className="ml-0 text-gray-900">1</span>
              <span className="ml-0 text-gray-900">499</span>
            </div>
            <div className="flex flex-col">
              <span className="title-font font-medium text-2xl text-gray-900">
                SubTotal: ₹1158.00
              </span>
              <div className="my-3">
                <button className="flex ml-0 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Trace Order
                </button>
              </div>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/hoodies.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
