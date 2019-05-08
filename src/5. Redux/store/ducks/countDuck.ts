//#region Reducer

export interface CountDuckState {
    count: number
} 

const initialState: CountDuckState = {
    count: 0
}

export const addCount = (increment: number) => ({type: "ADD_COUNT", payload: increment});

type Actions = ReturnType<typeof addCount>;
export const countReducer = (state: CountDuckState = initialState, action: Actions) => {
    if (action.type === 'ADD_COUNT') {
        return {...state, count: state.count + action.payload};
    }

    return state;
}

//#endregion
