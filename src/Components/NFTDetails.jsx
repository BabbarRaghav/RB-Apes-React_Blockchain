import React from 'react'
import {GrTextAlignLeft} from 'react-icons/gr'
import {BsFillBookmarkFill} from 'react-icons/bs'
import Dropdown from './Dropdown'

const style = {
  wrapper: `flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black`,
  icon: `h-5 w-5 text-gray-600`,
}

const NFTDetails = (props) => {
  const dropdownData = [
    {
      title: 'Description',
      icon: <GrTextAlignLeft className ={style.icon} />,
      description: props.description
    },
    {
      title: 'Properties',
      icon: <BsFillBookmarkFill  className={style.icon}/>,
      description: "Properties"
    },
  ]

  return (
    <div className={style.wrapper}>
      {dropdownData.map((item, index)=> (
        <Dropdown key={index} title={item.title} icon={item.icon} description={item.description}/>
      ))}
    </div>
  )
}

export default NFTDetails