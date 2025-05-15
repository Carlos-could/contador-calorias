import { Activity } from "../types"

export type ActivityActions = 
{  type: 'save-activity', payload: {newActivity : Activity} }

export type ActivityState = {
    activities: Activity[]

}

export const initialState : ActivityState = {
    activities: []

}

export const activityReducer = (
    state : ActivityState,
    actions : ActivityActions

) => {

    if (actions.type === 'save-activity') {

        //aqui se maneja registros duplicados
        return {
            ...state,
            activities: [...state.activities,  actions.payload.newActivity]
        }
    }

} 

