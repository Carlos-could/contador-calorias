import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { categories } from "../data/categories"
import { Activity } from "../types"
import { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>
} 

function Form({dispatch} : FormProps) {


  const [activity, setActivity] = useState<Activity>(
    {
      category: 1,
      name: '',
      calories: 0
    })

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id)
    setActivity ({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }
  const isValidActivity = () => {
    const {name, calories} = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: 'save-activity', payload: {newActivity:activity}})
  }


  return (
    <form 
      className="space-5  bg-white p-10 rounded-lg space-y-5"
      onSubmit={handleSubmit}
      >
    
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
        className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white px-3  py-2 rounded-lg disabled:opacity-10"
        value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
        disabled={!isValidActivity()}
      />

    </form>
  )
}

export default Form