import './App.css';
import {Form} from "./components/Form/Form";
import {useReducer} from "react";
import {Cats} from "./components/Cats/Cats";
import {Dogs} from "./components/Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type){
        case 'add_cat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}
        case 'add_dog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}

        default: throw new Error('myError')
    }
}


function App() {

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});

  return (
    <div>
        <Form dispatch={dispatch}/>
        <div className={'disp'}>
            <Cats cats={cats} dispatch={dispatch}/>
            <Dogs dogs={dogs} dispatch={dispatch}/>
        </div>
    </div>
  );
}

export default App;
