import React, { useState } from 'react'

const Crop = () => {
    const initialCrops = [

        { name: "Tomato", type: "Vegetables", status: "Growing" },
      
        { name: "Apple", type: "Fruits", status: "Planted" },
      
        { name: "Wheat", type: "Grains", status: "Harvested" },
      
        { name: "Carrot", type: "Vegetables", status: "Growing" },
      
        { name: "Banana", type: "Fruits", status: "Growing" }
      
      ];
    const [value,setValue]=useState('');
    const filterName=initialCrops.filter(c=>c.name.toLowerCase().includes(value.toLowerCase()));
  return (
    <div>
        <input type="text" onChange={(e)=>setValue(e.target.value)}></input>
        {
            <ul>
                {
                    filterName.map((crop,i)=>{
                        return <li key={i}>{crop.name}</li>
                    })
                }
            </ul>
        }
    </div>
  )
}

export default Crop