import React from 'react'

const Card = (props) => {

    return (
        <div className="lg:w-[690px] lg:h-[770px] w-[290px] h-[470px] rounded-xl flex justify-center m-6">
            <div>
                <div className='pb-4 border-b border-gray-500/60 flex justify-center'>
                    <img src={props.image} alt="" className="lg:w-[490px] lg:h-[600px] w-[190px] h-[300px] object-cover rounded-xl" />
                </div>
                <div className="pt-4 flex">
                    <div className='lg:h-[260px] lg:w-[400px] w-[190px] h-[300px]'>
                        <div className='text-md text-gray-300 font-semibold '>{props.name}</div>
                        <div className='text-md text-gray-500 font-normal '>{props.number} items</div>
                    </div>
                    <div className='ml-auto border-2 flex rounded-md  justify-center items-center border-green-500 h-[40px] w-[70px] text-center text-green-500'>
                        ${props.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card