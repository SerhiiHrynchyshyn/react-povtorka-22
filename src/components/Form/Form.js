import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', userName: '', email: ''});

    const send = (e) => {
        e.preventDefault();
        getFilter(form);
    }

    const handler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...eventData});
    }


    return (
        <div>
            <form onSubmit={send}>
                <label>User: <input type="text" name={'name'} value={form.name} onChange={handler}/></label>
                <label>User Name: <input type="text" name={'userName'} value={form.userName} onChange={handler}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={handler}/></label>
                <button>Send</button>
            </form>

        </div>
    );
};

export {Form};
