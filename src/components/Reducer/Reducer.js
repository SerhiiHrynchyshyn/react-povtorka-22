import React, {useReducer} from 'react';

import './Reducer.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, counter1: state.counter1 + 1}
        case 'dec1':
            return {...state, counter1: state.counter1 - 1}
        case 'res1':
            return {...state, counter1: 0}

        case 'inc2':
            return {...state, counter2: state.counter2 + 1}
        case 'dec2':
            return {...state, counter2: state.counter2 - 1}
        case 'res2':
            return {...state, counter2: 0}

        case 'inc3':
            return {...state, counter3: state.counter3 + 1}
        case 'dec3':
            return {...state, counter3: state.counter3 - 1}
        case 'res3':
            return {...state, counter3: 0}

        default:
            throw new Error('myError')
    }
}

const Reducer = () => {


    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0,});

    return (
        <div className={'container'}>
            <div className={'wrap'}>
                <div>{state.counter1}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc1'})}>Inc</button>
                    <button onClick={() => dispatch({type: 'dec1'})}>Dec</button>
                    <button onClick={() => dispatch({type: 'res1'})}>Rest</button>
                </div>

            </div>
            <div className={'wrap'}>
                <div>{state.counter2}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc2'})}>Inc</button>
                    <button onClick={() => dispatch({type: 'dec2'})}>Dec</button>
                    <button onClick={() => dispatch({type: 'res2'})}>Rest</button>
                </div>
            </div>
            <div className={'wrap'}>
                <div>{state.counter3}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc3'})}>Inc</button>
                    <button onClick={() => dispatch({type: 'dec3'})}>Dec</button>
                    <button onClick={() => dispatch({type: 'res3'})}>Rest</button>
                </div>
            </div>

        </div>
    );
};

export {Reducer};