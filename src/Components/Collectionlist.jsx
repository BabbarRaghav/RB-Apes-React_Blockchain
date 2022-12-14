import React, { useEffect, useState } from "react";
import Collection from "./Collection";
import { useMarketplace } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

const Collectionlist = () => {
  const [listing, setlisting] = useState([]);
  const market = useMarketplace("0xDCc3b26792FCa245b75F0802477dA53CF80c38f3");
  console.log(listing);
  useEffect(() => {
    const getlist = async () => {
      try {
        const list = await market.getActiveListings();
        setlisting(list);
      } catch (error) {
        console.log(error);
      }
    };
    getlist();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center">
          Collections
        </h2>

        {listing.length === 0 ? (
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
          <>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {listing?.map((list, index) => (
                <Link
                  to={`/asset/${list.assetContractAddress}/${list.id}`}
                  key={index}
                >
                  <Collection list={list} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Collectionlist;
