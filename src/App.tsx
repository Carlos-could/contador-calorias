import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

  const [state, dispatch] = useReducer (activityReducer, initialState )


  return (
    <>
      <header className="bg-lime-500 p-3">
        <div>
          <h1 className="text-center text-lg text-white">
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-400 py-20 mx-auto">
        <div className=" mx-auto max-w-2xl">
          <Form
            state = {state}
            dispatch = {dispatch}
            />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">

        <ActivityList 
          activities={state.activities}
          dispatch = {dispatch}
          />

      </section>
    </>
  )
}

export default App