import React from 'react'

const Collection = () => {
  return (
    <div className="group relative mb-5">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="/">
              <span className="absolute inset-0"></span>
              Desk and Office
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>
  )
}

export default Collection