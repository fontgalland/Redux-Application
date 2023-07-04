import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth';
import counterReducer from './counter';

export const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer } 
});


// Redux Reducer without toolkit
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
    

//     return state;
// }

// export const store = createStore(counterReducer);