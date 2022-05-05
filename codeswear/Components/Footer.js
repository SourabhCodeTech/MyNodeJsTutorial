import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={'/'}>
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Image src="/logo.png" width={30} height={30} alt="" />
                <span className="ml-3 text-xl text-pink-500 font-bold font-[cursive]">
                  CODESWEAR.COM
                </span>
              </a>
            </Link>

            <p className="mt-2 px-2 text-sm text-gray-500">
              Wear the &lt;code/&gt; - Perimum Tshirts, Hoodies and apperals
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Shop
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Tshirts</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Stickers</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Shop
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Tshirts</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Stickers</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Shop
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Tshirts</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Stickers</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Codeswear.com - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
