import { Activity } from "../types"

export type ActivityActions = 
{  type: 'save-activity', payload: { newActivity : Activity} } |
{ type: 'set-activeId', payload : { id : Activity['id']} }

export type ActivityState = {
    activities: Activity[],
    activeId : Activity['id']
}

export const initialState : ActivityState = {
    activities: [],
    activeId : ''

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

    if (actions.type === 'set-activeId') {
        return {
            ...state,
            activeId : actions.payload.id
        }
    }

    return state

} 

