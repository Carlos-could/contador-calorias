import { useState } from "react"

import { categories } from "../data/categories"

export default function Formulario() {

   const [activity, setActivity] = useState({
      category: 2,
      name:"",
      calories: 0
   })
  return (
    <div className="flex flex-col w-lg">

      <select value={activity.category}>
         {categories.map(category => (
            <option value={category.id} key = {category.id}>
               {category.name}
            </option>
         ))}
      </select>
      <input type="text" value={activity.name}/>
      <input type="number" value={activity.calories}/>
      <input type="submit" /> 
      
    
    </div>
  )
}
