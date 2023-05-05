

const ProductPage = () => {


    return (
        <section className="p-12 bg-[#141416] my-40">
            <div className="container flex gap-8 justify-center max-lg:flex-col">
                <div className="w-full">
                    <img className="rounded-[16px] mx-auto object-cover min-h-full min-w-[50%] max-h-full max-w-full " src="https://ezway.s3.amazonaws.com/jondo/nft/nft-header-2.jpg" alt="Product Image" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <h2 className="text-[40px] text-[#FCFCFD]">CHEF MONKEY</h2>
                    <div className="flex gap-4 font-bold items-center">
                        <span className="p-1 text-[#45b26b] border-[#45b26b] border-[2px] rounded-[4px]">$155</span>
                        <span className="text-base text-[#777E90]">5 in stock</span>
                    </div>
                    <div className="mt-6 text-base text-[#777E90]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-8 w-[90%] h-[48px] px-[24px] rounded-[24px] text-bold inline-flex justify-center items-center bg-[#4437ff] text-white ">Buy Now</button>
                    </div>
                </div>
            </div>

            <div></div>
        </section>
    )
}
export default ProductPage