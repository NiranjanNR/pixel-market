import React from 'react'

const Card = (props) => {
    return (
        <div className=''>
            <div className="w-[290px] h-[570px] rounded-xl flex justify-center m-6 bg-mine">
                <div>
                    <div className='pb-4 border-b border-gray-500/60'>
                        <img src={props.image} alt="" className="w-[290px] h-[400px] object-cover rounded-xl" />
                    </div>
                    <div className="pt-4 flex ">
                        <div className='h-[60px] w-[200px] bg--50'>
                            <div className='text-md text-gray-300 font-semibold '>{props.name}</div>
                            <div className='text-md text-gray-500 font-normal '>{props.number} items</div>
                        </div>
                        <div className='ml-auto border-2 flex rounded-md  justify-center items-center border-green-500 h-[40px] w-[70px] text-center text-green-500'>
                            ${props.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card