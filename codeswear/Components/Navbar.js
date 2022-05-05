import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { useRef } from 'react';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.add('translate-x-full');
      ref.current.classList.remove('translate-x-0');
    }
  };
  const ref = useRef();
  return (
    <header className="text-white shadow-md bg-purple-800 w-full border-none fixed z-10 top-0">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <Image src="/logo.png" width={30} height={30} alt="" />
            <span className="ml-3 text-xl text-pink-500 font-bold font-[cursive]">
              CODESWEAR.COM
            </span>
          </a>
        </Link>
        <nav className="md:ml-5 flex flex-wrap font-bold items-center space-x-5">
          <Link
            href="/tshirts"
            className="cursor-pointer text-white cursor-pointer"
          >
            T-Shirt
          </Link>
          <Link
            href="/hoodies"
            className="cursor-pointer text-white cursor-pointer"
          >
            Hoodies
          </Link>
          <Link
            href="/stickers"
            className="cursor-pointer text-white cursor-pointer"
          >
            Stickers
          </Link>
          <Link
            href="/mugs"
            className="cursor-pointer text-white cursor-pointer"
          >
            Mugs
          </Link>
        </nav>
        <div className="flex absolute right-2 border-0 py-1 px-3 cursor-pointer">
          <Link href={'/login'}>
            <a>
              <MdAccountCircle className="text-xl md:text-2xl mr-3" />
            </a>
          </Link>
          <AiOutlineShoppingCart
            onClick={toggleCart}
            className="text-xl md:text-2xl"
          />
        </div>
      </div>
      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart text-black absolute top-0 right-0 bg-pink-100 py-10 px-5 transition-transform ${
          Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'
        } transform`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 text-pink-500 right-2 cursor-pointer"
        >
          <AiFillCloseCircle className="text-xl md:text-2xl" />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-5">Your Cart is Empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-3">
                  <div className="w-2/3">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="flex items-center justify-center w-1/3 text-lg">
                    <AiFillPlusCircle
                      className="cursor-pointer text-pink-500"
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-pink-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold my-2">SubTotal: ₹{subTotal}</div>
        <div className="flex">
          <Link href={'/checkout'}>
            <button className="inline-flex mr-1 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" /> Checkout
            </button>
          </Link>
          <button
            className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
