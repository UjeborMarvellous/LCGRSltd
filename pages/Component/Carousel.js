import React from 'react'
import { FaAddressCard } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"




const NewCarousel = () => {
  return (
    <div className='mD'>
    {/* Head page start */}
        <div className=''>
            <div className="">
                <img src="./IMG/2.jpg" alt='loading...' className='w-full height absolute' />
            </div>
            <div className="relative REl pt-16 pb-40 pt">
                <div className="mt-48 mt ml-16">
                    <h1 className='font-bold text-5xl text-orange-900 h1'>Cocoa Product That <br />Gives The Best <br />Skin Feeling</h1>
                    <button className='py-4 px-32 border-4 text-orange-900 btn mt-8 bg-transparent border-orange-900 hover:bg-orange-900 hover:text-white font-semibold text-xl rounded-full'>WHAT WE DO</button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 bg-orange-900 p-4 min absolute w-full">
            <a href="/" className='flex ml-32 MR'><FaAddressCard className='text-5xl text-white '/><span className='ml-6 text-white text-sm my-auto'>SUITE 1, HOUSE 24, CHURCH STREET ZONE1, LUGBE ACROSS ZONE 1, AIRPORT ROAD , ABUJA</span></a>
            <a href="/" className='flex ml-32 ML'><FiPhoneCall  className='text-5xl text-white border-2 border-white rounded-full p-2'/><span className='ml-6 text-white text-sm my-auto'>+2348133110229</span></a>
        </div>
    {/* Head page stop */}
    {/* Product start */}
    <div className="bg-gray-100">
        <h1 className='text-center font-bold text-5xl py-8 mt-8 italic AS'>Our Product</h1>
        <div className=" grid grid-cols-4 ml-24 GD">
            <figure className="fig">
                <img src="./IMG/4.jpg" alt='loading...' className='h contain' />
                <figcaption>
                    <p className='text-lg font-semibold xl'>Cocoa Cream Product For The Best Skin <span className=''>Feeling</span></p>
                </figcaption>
            </figure>
            <figure className="fig">
                <img src="./IMG/4.jpg" alt='loading...' className='h contain' />
                <figcaption>
                    <p className='text-lg font-semibold xl'>Cocoa Cream Product For The Best Skin <span className=''>Feeling</span></p>
                </figcaption>
            </figure>
            <figure className="fig">
                <img src="./IMG/4.jpg" alt='loading...' className='h contain' />
                <figcaption>
                    <p className='text-lg font-semibold xl'>Cocoa Cream Product For The Best Skin <span className=''>Feeling</span></p>
                </figcaption>
            </figure>
            <figure className="fig">
                <img src="./IMG/4.jpg" alt='loading...' className='h contain' />
                <figcaption>
                    <p className='text-lg font-semibold xl'>Cocoa Cream Product For The Best Skin <span className=''>Feeling</span></p>
                </figcaption>
            </figure>
        </div>
    </div>
    {/* Product stop */}
    {/* Director start */}
            {/* <div className="two bg-black p-20 grid grid-cols-2 sep">
                <div className="det">
                    <h1 className="HA text-white font-semibold text-3xl MT mt-32">We started small, Now we grown a lot with help of you. Integer magna augue, ultricies eu at. Duis et libero molestie aliquet, semper sem.</h1>
                    <button className="AN bg-white text-black font-semibold py-4 mt-8 px-16 flex z-50 hover:border-2 hover:bg-transparent hover:text-white hover:border-white hover:py-4 hover:px-16 ">SEE WHAT WE DO&nbsp;&nbsp;&nbsp;<span className="my-auto text-2xl font-thin"><BsArrowRight /></span></button>
                </div>
                <div className="img ">
                    <img src="/9.jpg" alt="Loading..." className="RA" loading="lazy"/>
                </div>
            </div> */}
        {/* <div className="Imh">
            <img src="./IMG/3.jpg" alt='loading...' className='w-1/4 cont absolute' />
        </div> */}
        <div className="bg-orange-900 AW grid grid-cols-2">
            <div className="py-24 relative DR ml-24 w-3/4">
                <h1 className='text-white font-bold text-4xl py-8 mt-8 italic SPH ml-6'>Director's Speach <br /> to Clients Side</h1>
                <div className="p">
                    <p className='text-white ml-24 Dr'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Odio sunt, beatae minus ratione non error dolor <br /> pariatur, odit veritatis itaque earum tenetur dolorum <br /> similique iure assumenda sint consequatur quo.</p>
                </div>
                <button className='ml-6 py-4 px-24 border-4 text-white btn mt-8 bg-transparent btnd border-white hover:bg-white hover:text-orange-900 font-semibold text-xl rounded-full'>READ MORE</button>
            </div>
            <div className="">
                <img src="./IMG/3.jpg" alt='loading...' className='w-1/4 cont absolute' />
            </div>
        </div>
{/* Director stop */}
{/* Footer start */}
        <div className="bg-gray-100 p-12">
            <div className="grid grid-cols-2 gap-2 GB">
                <div className="Thrid">
                    {/* <h1 className="font-bold ml-auto mt-16 lg:block lg:mx-auto mr-32  text-white text-2xl p-3 lg:hidden rounded-full border-4 border-white block text-center w-16">h.</h1> */}
                    <i className=" lg:hidden"><a href="/" className="flex"><img src="./IMG/Dabino.jpg" alt="" className="w-16 h-16 rounded-full bg-orange-900 p-1" /><span className="ml-2 mt-4 font-bold text-3xl cursor-pointer">LCGRS<span className="lowercase text-xl">LTD</span></span></a></i>
                    <div className="flex">
                        <a href="/" className="text-3xl ml-10 mt-8 text-black"><FaFacebookF /></a>
                        <a href="/" className="text-3xl ml-10 mt-8 text-black"><BsTwitter /></a>
                        <a href="/" className="text-3xl ml-10 mt-8 text-black"><FaWhatsapp /></a>
                        <a href="/" className="text-3xl ml-10 mt-8 text-black"><SiInstagram /></a>
                    </div>
                    <p className="text-gray-500 mt-16 text-white whitespace-nowrap RES">Copyright © AgniHD 2017 All Rights Reserved.</p>
                </div>
                <div className="two">
                    <div className="flex HAGC items-baseline space-x-4">
                        <a href="/" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg mr-16">Home</a>
                        <a href="/" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg">About us</a>
                        <a href="/" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg HL ml-4">Gallery</a>
                        <a href="/" className="px-6 font-semibold py-2 text-md hover:bg-orange-900 hover:text-white shadow-lg">Contact us</a>
                    </div>         
                    {/* <h1 className="sA font-bold ml-auto mt-16 text-white text-2xl p-3 rounded-full border-4 border-white block text-center w-16 HK ABS">h.</h1> */}
                    <i className=""><a href="/" className="flex sA HK ABS mt-16"><img src="./IMG/Dabino.jpg" alt="" className="w-16 h-16 rounded-full bg-orange-900 p-1" /><span className="ml-2 mt-4 font-bold text-3xl cursor-pointer">LCGRS<span className="lowercase text-xl">LTD</span></span></a></i>
                </div>
            </div>
        </div>
{/* Footer ends */}
    </div>
  )
}
export default NewCarousel