import React from "react";

const FeaturePage = () => {
 
    return (
      <section className=" bg-[#141416] my-40  ">
        <div className="container flex gap-8 max-lg:flex-col ">
       
            <>
              <div className="">
                <img
                  className="lg:w-[490px] lg:h-[600px] w-[190px] h-[300px] object-cover rounded-xl mx-auto"
                  src='https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200'
                  alt='hello'
                />
              </div>
              <div className="flex flex-col w-full gap-2 justify-center items-center">
                <h2 className="text-4xl md:text-6xl text-[#FCFCFD] ">Chef Monkey</h2>
                <div className="flex gap-4 font-bold items-center">
                  <span className="p-1 text-[#45b26b] border-[#45b26b] border-[2px] rounded-[4px]">
                    $15
                  </span>
                  <span className="text-base text-[#777E90]">
                    45 in stock
                  </span>
                </div>
                <div className="mt-6 text-base text-[#777E90] md:max-w-[80%]">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="flex justify-center">
  <button className="mt-8 w-32 h-12 px-6 text-bold inline-flex justify-center items-center bg-[#4437ff] text-white whitespace-nowrap">
    Buy Now
  </button>
</div>

              </div>
            </>
         
        </div>
      </section>
    );
  };
  
  
  
export default FeaturePage