import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="container flex gap-8 justify-center max-lg:flex-col">
            <div className="w-full">
                <img className="rounded-[16px] mx-auto object-cover min-h-full min-w-[50%] max-h-full max-w-full " src={props.image} alt="Product-1" />
            </div>
            <div className="flex flex-col w-full gap-2">
                <h2 className="text-[40px] text-[#FCFCFD]" >{props.title}</h2>
                <div className="flex gap-4 font-bold items-center">
                    <span className="p-1 text-[#45b26b] border-[#45b26b] border-[2px] rounded-[4px]">${props.price}</span>
                    <span className="text-base text-[#777E90]">{props.count} in stock</span>
                </div>
                <div className="mt-6 text-base text-[#777E90]">
                    <p>{props.description}</p>
                </div>
                <div className="flex justify-center">
                    <button className="mt-8 w-[20%] h-[48px] px-[24px] text-bold inline-flex justify-center items-center bg-[#4437ff] text-white ">Buy Now</button>
                </div>
            </div>
        </div>

    )
}

export default ProductCard