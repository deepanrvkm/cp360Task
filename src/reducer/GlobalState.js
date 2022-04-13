import React from "react"
import initialData from './InitialData'
import Reducer from './Reducer'

function GlobalState(){
    const [state, dispatch] = React.useReducer(Reducer, initialData);
    return {state, dispatch}
}

export default GlobalState;