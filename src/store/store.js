import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter/counter";


const reducers = combineReducers({
  counter: counter
})


const setupStore = () => {
  return configureStore({
    reducer: reducers
  })
}

export default setupStore