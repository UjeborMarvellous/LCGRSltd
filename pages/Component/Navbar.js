import React, { useState } from "react";
import {Transition} from "@headlessui/react";


function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    return ( 
        <div className="shadow-sm ">
            <nav className="w-full stem BG z-10">
                <div className="w-full bg-white">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center py-2 bg-white justify-between w-full">
                            <div className=" mx-24 flex items items-center bg-white justify-between w-full">
                                  <div className="flex justify-center items-center flex-shrink-0 LEFT">
                                      <i className=""><a href="/" className="flex"><img src="./IMG/Dabino.jpg" alt="" className="w-16 h-16 rounded-full bg-orange-900 p-1" /><span className="ml-2 mt-4 font-bold text-3xl cursor-pointer">LCGRS<span className="lowercase text-xl">LTD</span></span></a></i>
                                  </div>
                                <div className="md:block">
                                  <div className="flex items-baseline space-x-4 width">
                                      <a href="/" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg">Home</a>
                                      <a href="/About" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg">About us</a>
                                      <a href="/" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg">Gallery</a>
                                      <a href="/" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg">Contact us</a>
                                  </div>
                                </div>
                               </div>
                            </div>
                            <div className="mr-10 flex lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-orange-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-900 focus: outline-none focus:ring-offset-2 focus:ring-offset-black focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16M4"></path>
                                        </svg>
                                    ):(
                                        <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    {(ref) => (
                        <div className="lg:hidden id=mobile-menu bg-white">
                            <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a href="/" className="cursor-pointer hover:bg-orange-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                                <a href="/About" className="cursor-pointer hover:bg-orange-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About us</a>
                                <a href="/" className="cursor-pointer hover:bg-orange-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
                                <a href="/" className="cursor-pointer hover:bg-orange-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
                            </div>
                        </div>
                        
                    )}
                </Transition>
            </nav>
        </div>
     );
}
 
export default Navbar;