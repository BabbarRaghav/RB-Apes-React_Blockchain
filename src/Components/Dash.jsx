import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Dash = (props) => {
  const notify = (msg) =>
    toast.info(msg, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <>
      <div className="group relative mb-5">
        <div className="w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={props.list.metadata.image}
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <span className="absolute inset-0"></span>
          {props.list.metadata.description}
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {props.list.metadata.name}
        </p>
        <div className="flex items-center justify-end space-x-2">
          <AiOutlineHeart className="h-3 w-3 text-gray-500 dark:text-gray-400" />
          <div className="text-xs text-gray-800 dark:text-gray-400">
            {props.list.metadata?.stats?.favorites ?? 0}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm"
        onClick={()=>notify("Please visit to Thirdweb to Sell out the NFT")}
      >
        Sell Out
      </button>
      <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </>
  );
};

export default Dash;
