import { createStore } from 'redux';
import reducer from '../reducers'

console.log("STORE");
const initialState = {tech: "REACT!"};

export const store = createStore(reducer, initialState);
