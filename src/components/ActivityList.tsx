import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import { HiOutlinePencilSquare  } from "react-icons/hi2";

type ActivityListProps = {
  activities: Activity[]
}

export default function ActivityList({ activities }: ActivityListProps) {

  const categoryName = useMemo(()=> (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [activities])
  return (
    <>
      <h2 className='text-4xl text-slate-600 text-center'>
        Comida y actividades
      </h2>
      {activities.map(activity => (
        <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
          <div className="space-y-2 relative">
            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-medium ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
              {categoryName(activity.category)}
            </p>
            <p className="text-2xl pt-5">{activity.name}</p>
            <p className="text-4xl text-lime-500">{activity.calories} {''}
              <span>Calorias</span>
            </p>

          </div>
          <div className="flex gap-5 items-center">
            <button>

          <HiOutlinePencilSquare  className="w-8 h-8 text-stone-600"/>
            </button>

          </div>
        </div>
      ))}

    </>


  )
}
