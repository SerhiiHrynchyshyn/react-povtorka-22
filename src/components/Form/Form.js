import React, {useRef} from 'react';

import './Form.css';

const Form = ({dispatch}) => {
    const catInput = useRef()
    const dogInput = useRef()

    const send = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    const saveCat = () => {
        dispatch({type: 'add_cat', payload:{cat: catInput.current.value}})
    }
    const saveDog = () => {
        dispatch({type: 'add_dog', payload:{dog: dogInput.current.value}})
    }

    return (
        <>
            <form onSubmit={send}>
                <label>Add Cat: <input type={'text'} ref={catInput} placeholder={'cats'}/>
                    <button onClick={saveCat}>Save</button>
                </label>
                <label>Add Dog: <input type={'text'} ref={dogInput} placeholder={'dogs'}/>
                    <button onClick={saveDog}>Save</button>
                </label>
            </form>
            <hr/>
        </>
    );
};

export {Form};