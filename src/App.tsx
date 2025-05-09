import Form from "./components/Form"
import { useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"

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
            dispatch = {dispatch}/>
        </div>
      </section>
    </>
  )
}

export default App