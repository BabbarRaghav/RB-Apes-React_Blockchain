import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMarketplace } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { BsCreditCard2FrontFill, BsFillTagFill } from "react-icons/bs";
import {
  AiOutlineQuestionCircle,
  AiOutlineClockCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import NFTBasicInfo from "./NFTBasicInfo";
import NFTDetails from "./NFTDetails";
// import { useNavigate } from "react-router-dom";

const CollectionInfo = () => {
  const params = useParams();
  // const navigate = useNavigate();
  const marketPlace = useMarketplace(
    "0xDCc3b26792FCa245b75F0802477dA53CF80c38f3"
  );
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getListing = async () => {
    try {
      setLoading(true);
      const listing = await marketPlace.getListing(BigNumber.from(params.id));
      setList(listing);
      setLoading(false);
      console.log(list)
    } catch (error) {
      console.log(error);
    }
  };

  const buyNFT = async () => {
    try {
      await marketPlace.buyoutListing(params.id, 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListing();
    // eslint-disable-next-line
  }, []);

  const style = {
    wrapper: `h-[100vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4 dark:bg-[#202226] lg:max-w-none lg:py-8 lg:px-24`,
    nftContainer: `flex flex-col lg:flex-row lg:space-x-4`,
    leftContainer: `flex flex-col space-y-4`,
    leftElement: `hidden lg:block`,
    rightContainer: `flex flex-1 flex-col space-y-4`,
    buyoutContainer: `flex-1`,
  }

  return (
    <>
      <div className="wrapper">
        {loading ? (
          <div role="status" className="max-w animate-pulse mt-6">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className = {style.nftContainer}>
            <div className = {style.leftContainer}>
              <div className = {style.leftElement}>
                <div className="flex items-center justify-between p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    width="20"
                    height="20"
                  >
                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                  </svg>
                  <div className="heart flex space-x-2 items-center">
                    <AiOutlineHeart className="h-3 w-3 text-gray-500 dark:text-gray-400" />
                    <div className="text-sm text-gray-800 dark:text-gray-400">
                      0
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img
                    src={list?.asset?.image}
                    alt=""
                    width="448"
                    height="448"
                    className="rounded-b-lg object-cover"
                  />
                </div>
              </div>
              <div className = {style.leftElement}>
                <NFTDetails description={list?.asset?.description} property={list?.asset?.attributes}/>
              </div>
            </div>
            <div className={style.rightContainer}>
              <NFTBasicInfo name={list?.asset?.name} />
              <div className={style.buyoutContainer}>
                <div className="flex flex-col divide-y border dark:divide-black dark:rounded-lg dark:border-black">
                  <div className="flex items-center justify-between rounded-t-lg px-6 py-4 dark:bg-[#262a30]">
                    <div className="flex items-center space-x-2">
                      <AiOutlineClockCircle className="h-6 w-6 text-gray-400" />

                      <div className="text-gray-400">
                        Sales ends June 1, 2022 at 8:20pm GMT-7
                      </div>
                    </div>

                    <AiOutlineQuestionCircle className="h-6 w-6" />
                  </div>

                  <div className="space-y-4 rounded-b-lg px-6 py-4 dark:bg-[#313339]">
                    <div className="space-y-1">
                      <div className="font-medium text-gray-400">Buy at</div>

                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          width="20"
                          height="20"
                        >
                          <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                        </svg>
                        <span className="text-3xl font-bold">
                          {list?.buyoutCurrencyValuePerToken?.displayValue}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <div
                        className="flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-lg py-2 text-white bg-blue-500"
                        onClick={buyNFT}
                      >
                        <BsCreditCard2FrontFill className="h-6 w-6" />
                        <span className="text-lg font-semibold">Buy Now</span>
                      </div>
                      <div className="h-6 w-6 border border-black bg-[#363840]">
                        <BsFillTagFill className="h-6 w-6" />
                        <span className="text-lg font-semibold">
                          Make Offer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CollectionInfo;
