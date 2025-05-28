import { Activity } from "../types"

type ActivityListProps = {
  activities: Activity[]
}

export default function ActivityList({ activities }: ActivityListProps) {

  console.log(activities)
  return (
    <>
      <h2 className='text-4xl text-slate-600 text-center'>
        Comida y actividades
      </h2>
      {activities.map(activity => (
        <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
          <div className="space-y-2 relative">
            <p>
              {activity.calories}
            </p>
            <p className="text-2xl pt-5">{activity.name}</p>
            <p>{activity.calories} {''}
              <span>Calorias</span>
            </p>
          </div>
          <div>

          </div>
        </div>
      ))}

    </>


  )
}
