import React from 'react'

const Rooms = () => {
    return (
        <div className ='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className ='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h3 className ='text-2xl font-bold'>Fine Interior rooms</h3>
                <p className ='pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi earum eum sit optio alias animi sequi pariatur sint. Vel, fugiat quibusdam. Aspernatur excepturi tenetur architecto modi beatae dicta id cupiditate.</p>
            </div>

            <div className ='grid grid-cols-2 cols-span-2 gap-1'>
                <img className ='row-span-2object-cover w-full h-full'src="https://images.trvl-media.com/hotels/39000000/38420000/38413600/38413600/a7e16532.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium" alt='/'></img>
                <img className ='object-cover w-full h-full' src="https://media.dertouristik.com/exports/KuoniUK/ImageGalleryLightboxLarge/370246_ImageGalleryLightboxLarge.jpg" alt='/'></img>
                <img className ='row-span-2 object-cover w-full h-full' src="https://d1l4e1efm2qo9x.cloudfront.net/margaritavilleresorts.com-0790814584/cms/cache/v2/62702f810a7fc.jpg/1920x1080/fit/80/7d869d6c9136ba7e0b760e489c5be60a.jpg" alt='/'></img>
                
            </div>
        </div>
    )
}

export default Rooms;