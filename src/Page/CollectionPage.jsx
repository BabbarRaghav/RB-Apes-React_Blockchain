import React from 'react'
import { useParams } from "react-router-dom";

const CollectionPage = (props) => {
  const params = useParams()
  return (
    <div>CollectionPage Contract Address={params.contractAddress} and id={params.id}</div>
  )
}

export default CollectionPage