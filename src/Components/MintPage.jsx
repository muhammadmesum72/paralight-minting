import React, { useState } from "react";
import lineup from "../data/Lineup.jpg"
import ShinBts from "../data/ShinBTS.jpg"

const MintPage = () => {
    const [quantity, setQuantity] = useState(1)
    const addQuantity = () => {
        setQuantity((prev) => prev + 1)
    }
    const minusQuantity = () => {
        if(quantity > 0){
            setQuantity((prev) => prev - 1)
        }
    }
  return (
    <div className="container mx-auto">
      <div>
        {/* Heading */}
        <div  className="mx-auto text-center py-12 font-bold text-3xl">
          <h1>Shin Moonsoo BTS NFT Collection</h1>
        </div>
        {/* Mint  */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
            <div className="w-1/2">

            <span>imf</span>
            <div className="text-center mb-6 lg:mb-0 flex items-center justify-center gap-6 lg:text-2xl bg-gray-900 rounded-lg  w-fit mx-auto overflow-hidden text-white">
                <div onClick={minusQuantity} className="cursor-pointer py-3  px-6 bg-gray-500 font-bold text-white text-opacity-80 hover:text-opacity-100" >-</div>
                <div className="px-12 font-bold">{quantity}</div>
                <div onClick={addQuantity} className="cursor-pointer py-3 px-6 bg-gray-700  font-bold text-white text-opacity-80 hover:text-opacity-100">+</div>
            </div>
            </div>
            <div className="flex flex-col  gap-3 lg:w-1/2">
                <div className="lg:w-2/5">
                    <button className="px-6 py-2 bg-cyan-900 font-bold text-white rounded-lg w-full">Connect Wallet</button>
                </div>
                <div className="lg:w-2/5">
                <button className="px-6 py-2 bg-orange-600 font-bold text-white rounded-lg w-full">Mint</button>
                </div>
                <div className="text-xl text-center lg:w-2/5"><span className="text-2xl pr-3">2.33</span> <span className="font-bold">ETH + Gas</span></div>
            </div>
        </div>
      </div>
      {/* line up */}
      <div className="my-6">
        <img src={lineup} alt="" />
      </div>
      {/* footer img */}
      <div className="text-center py-12">
        <img src={ShinBts} alt="" className="w-1/2 mx-auto" />
      </div>
      
    </div>
  );
};

export default MintPage;
