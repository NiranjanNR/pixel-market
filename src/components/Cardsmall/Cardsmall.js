import React from 'react'

const Cardsmall = (props) => {

    return (
        <div className="rounded-xl md:flex justify-center m-6 bg-mine">
            <div className='flex justify-center'>
                <img src={props.image} alt="" className=" w-[140px] h-[140px] object-cover rounded-xl" />
            </div>
            <div className="flex justify-center ">
                <div className="pt-4 flex justify-center items-center ml-6 w-[190px]">
                    <div className='h-[60px] w-[200px] bg--50'>
                        <div className='text-md text-gray-300 font-semibold '>{props.name}</div>
                        <div className='text-md text-gray-500 font-normal '>{props.number} items</div>
                    </div>
                    <div className=' border-2 flex rounded-md  justify-center items-center border-green-500 h-[40px] w-[70px] text-center text-green-500'>
                        ${props.price}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardsmall