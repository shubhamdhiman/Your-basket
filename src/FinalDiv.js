import React from 'react'

function FinalDiv({name,amount}) {
  return (
    <div className="flex justify-between mt-12 mx-12">
        <p className="text-2xl text-gray-500">{name}</p>
        <p className="text-2xl text-gray-500">{amount} Rs</p>
      </div>
  )
}

export default FinalDiv