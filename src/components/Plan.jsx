import React from 'react'

const Plan = () => {
    return (
        <div className = 'max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            <div className ='grid grid-cols-2 grid-rows-6'>
                <img className ='object-cover w-full h-full p-2' src="https://images.trvl-media.com/lodging/1000000/920000/916700/916616/5d70aa9e.jpg?impolicy=resizecrop&rw=670&ra=fit" alt="/"></img>
                <img className ='object-cover w-full h-full p-2'  src="https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_437_h_230_c_fill_g_auto_q_auto:good_f_auto/v9647366904/Hotel/00005581/MOR_beach_beds1_low_res_nYFpAe.jpg" alt="/"></img>
                <img className ='object-cover w-full h-full p-2' src="https://ireward.superghs.com/resource/pimalai/page/Private_Dinner_On_the_Beach-1.jpg" alt="/"></img>
                <img className ='object-cover w-full h-full p-2' src="https://www.radstravelandtours.com/wp-content/uploads/2019/06/travel_philippines3.jpg" alt="/"></img>
            </div>
            <div className ='flex flex-col h-full justify-center'>
                <h3 className = 'text-5xl md:text-6xl font-bold'>Plan your next trip</h3>
                <p className ='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, consectetur</p>
                <p className = 'pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet adipisci maxime alias atque iure repellendus beatae eos commodi deleniti, voluptate, optio quaerat. Nemo dolor ut, eveniet exercitationem laboriosam odit.</p>
                <div>
                    <button className = 'border-black m-4 hover:shadow-xl'>Learn More</button>
                    <button className = 'bg-black text-white border-black m-4 hover:shadow-xl' >Book your trip</button>
                </div>
            </div>

        </div>        
    )
}

export default Plan