import React from 'react'
import Collection from './Collection'

const Collectionlist = () => {
  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto lg:max-w-none">
      <h2 className="text-2xl font-extrabold text-gray-900 text-center">Collections</h2>

      <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        <Collection/>
        <Collection/>
        <Collection/>
        <Collection/>
        <Collection/>
      </div>
    </div>
  </div>
  )
}

export default Collectionlist