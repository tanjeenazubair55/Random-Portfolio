import React from "react"

function Stack({Icon,name}) {
  return (
    <div className='overflow-hidden border border-[#9C9C9C] rounded-md flex items-center w-[12rem] py-4 space-x-2 justify-center mr-4 my-4'>
        <Icon className="text-[#9c9c9c] text-xl"/>
        <p className='text-[#9C9C9C] text-xl font-bold'> {name} </p>
    </div>
  )
}

export default Stack