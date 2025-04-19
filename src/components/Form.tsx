import { useState, ChangeEvent } from "react"
import { categories } from "../data/categories"

function Form() {

  const [activity, setsetActivity] = useState(
    {
      category: 1,
      name: '',
      calories: 0
    })


  const handleChange = (e: ChangeEvent<HTMLSelectElement>| ChangeEvent<HTMLInputElement>) => {
    setsetActivity({
      ...activity,
      [e.target.id]: e.target.value
    })
    console.log(e.target.id)
    console.log(e.target.value)

  }
  return (
    <form className="space-5  bg-white p-10 rounded-lg space-y-5">

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-semibold">Calorias</label>
        <select
          className="border border-slate-300 p-3 py-2 rounded-lg"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-semibold">Actividad</label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="ej. comida, jugo de naranja, ensalada, ejercicio, pesas..."
          value={activity.name}
          onChange={handleChange}

        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-semibold">Calorias</label>
        <input
          id="calories"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}

        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white px-3  py-2 rounded-lg"
        value='Guardar comida o guardar ejercicio'
      />

    </form>
  )
}

export default Form