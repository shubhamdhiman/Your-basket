import React from 'react'

function FinalDiv({name,amount}) {
  return (
    <div className={`flex justify-between mt-12 mx-12 ${name==="Subtotal" || name==="VAT@18%"?"text-gray-500":"font-bold"}`}>
        <p className="text-2xl">{name}</p>
        <p className="text-2xl">{amount} Rs</p>
      </div>
  )
}

export default FinalDiv