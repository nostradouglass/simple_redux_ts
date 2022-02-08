

interface ActionTypes {
    type: Actions.INCREMENT | Actions.DECREMENT,
    payload?: any
}

enum Actions {
    INCREMENT,
    DECREMENT
}

 interface CounterState {
    count: number
}


// Action Creators
export const increment: () => ActionTypes = () => ({
    type: Actions.INCREMENT
})

export const decrement: () => ActionTypes = () => ({
    type: Actions.DECREMENT
})





const initialState: CounterState = {
    count: 0
}

let countReducer: (x: CounterState, y: ActionTypes) => CounterState = (state = initialState, action) => {
    switch (action.type) {
        case (Actions.INCREMENT):
            return { ...state, count: state.count + 1 };
        case (Actions.DECREMENT):
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export default countReducer