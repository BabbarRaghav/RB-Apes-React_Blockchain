import React from "react";

const Collection = (props) => {
  return (
    <div className="group relative mb-5">
      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={props.list.asset.image}
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <span className="absolute inset-0"></span>
        {props.list.asset.description}
      </h3>
      <p className="text-base font-semibold text-gray-900">
        {props.list.asset.name}
      </p>
      <p className="mt-1 text-lg font-medium text-gray-900 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width="20"
          height="20"
        >
          <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
        </svg>
        {props.list.buyoutCurrencyValuePerToken.displayValue}
      </p>
    </div>
  );
};

export default Collection;
