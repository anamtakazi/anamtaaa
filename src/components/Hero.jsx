import React from 'react';

const Hero = () => {
    return (
        <div className='W-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-fit' src="https://www.theknot.com/tk-media/images/602309cf-57bb-4f10-8c3b-5a79eb437ee9" alt ="/"/>
            <div className='bg-black/40 absolute top-0 left-0 w-full h-screen' />
            <div className = 'absolute top-0 w-full h-full flex flex-col justify-center text-white' >
                <div className = 'md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <p>All Inclusive</p>
                    <h1 className = 'font-bold text-4xl md:text-5xl drop-shadow-2xl'>Private Beaches & Gateways</h1>
                    <p className = 'max-w[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere quod cumque voluptatem nisi velit nulla molestias? Iure dicta nulla debitis saepe autem officiis neque, doloremque quos voluptatem non laborum.</p>
                    <button className = 'bg-white text-black'>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}
export default Hero