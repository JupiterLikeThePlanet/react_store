import {createStore} from 'redux';

//create store
// get store state

// Action Generators - Functions tah t return action objects

// Regular way

// const store = createStore((state = {count: 0}, action) => {
//
//     switch (action.type) {
//         case 'INCREMENT':
//
//             //checks to see if undefined or a number
//             const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//
//             return {
//                 count: state.count + incrementBy
//             }
//
//         case 'DECREMENT':
//
//             const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//
//             return {
//                 count: state.count - decrementBy
//             }
//
//         case 'SET':
//
//             return {
//                 count: action.count
//             }
//
//         case 'RESET':
//
//             return {
//                 count: 0
//             }
//
//
//         default:
//             return state;
//     }
//
//
// });
//
//
//
//
// store.subscribe(() => {
//     console.log(store.getState())
// });
//
// store.dispatch({
//     type:'SET',
//     count: 100
// });
//
// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 5
// });
//
// store.dispatch({
//     type:'INCREMENT',
// });
//
// store.dispatch({
//     type:'RESET'
// });
//
//
// store.dispatch({
//     type:'DECREMENT'
// });
//
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 4
// });
//
//



/////// ES6 way

//ActionGenerators

//using implicit return
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET',
    count: 0
})

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
})



const store = createStore((state = {count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':

            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':

            return {
                count: state.count - action.decrementBy
            }

        case 'SET':

            return {
                count: action.count
            }

        case 'RESET':

            return {
                count: action.count
            }


        default:
            return state;
    }


});




store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(setCount({count: 100}));

store.dispatch(incrementCount({incrementBy: 6}));
//
// store.dispatch({
//     type:'INCREMENT',
// });
//
store.dispatch(resetCount())
//
//
store.dispatch(decrementCount({decrementBy: 3}));
//
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 4
// });





