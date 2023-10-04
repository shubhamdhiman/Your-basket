import React,{useEffect, useState} from 'react'

function Item({item ,changeData,data}) {
    const [cost,setCost]  = useState(item.cost)
    const [quantity,setQuantity] = useState(1)
    useEffect(()=>{
        setCost(item.price*quantity)
    },[quantity])
    useEffect(()=>{
        updateItemCost()

    },[cost])
    function updateItemCost() {
        const updatedData = data.map((itemData) => {
            if (itemData.name === item.name) {
                return {
                    ...itemData,
                    cost: item.price*quantity,
                };
            }
            return itemData;
        });
        changeData(updatedData);
        
    }
    function handleChange(val){
         if(val === "increase"){
            setQuantity(prev=>prev+1)
            
            // updateItemCost()
        }else if(val === "decrease"){
            if(quantity===1){
                return;
            }
            setQuantity(prev=>prev-1)
            // updateItemCost()
        }
    }
  return (
    <div className=' flex justify-between mt-12'>
            <div className='text-2xl  align-left ml-12 '>
              {item.name}
            </div>
            <div className='flex text-2xl  mr-12'>
              <p>{item.price}</p>
              <p className="mx-12 flex">
                <input type='number'className='w-12 h-12 border-2 border-gray' onChange={(e)=>{handleChange(e.target.value)}} value={quantity}></input>
                <div className='flex flex-col justify-between items-center ml-2'>
                    <button className='h-5 w-5 bg-gray-500 flex justify-center items-center' onClick={()=>handleChange("increase")}>+</button>
                    <button className='h-5 w-5 bg-gray-500 flex justify-center items-center' onClick={()=>handleChange("decrease")}>-</button>
                </div>
              </p>
              <p>{cost}</p>
            </div>
        </div>
  )
}

export default Item