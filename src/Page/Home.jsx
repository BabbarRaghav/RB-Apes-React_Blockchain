import React from 'react'
import Banner from '../Components/Banner'
import Collectionlist from '../Components/Collectionlist'
import Details from '../Components/Details'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Details/>
        <Collectionlist/>
    </div>
  )
}

export default Home