import React, {useState} from 'react';

const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const [values, setValues] = useState({
        name: "",
        surname: '',
        number: '',
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const createContact = () => {
        setContacts([...contacts, values])
        setValues({name: '',number: '',surname: ''})
    }
    return (
        <div className='container'>
            <div className='flex my-5 flex-col items-center w-[540px] mx-auto rounded bg-amber-500 px-4 py-4'>
                <h1 className='text-center text-[2rem] text-white font-mono'>ADD TO CONTACT</h1>
                <input
                    type="text"
                    className='rounded border mb-2 px-4 py-2 w-full'
                    placeholder='Asan'
                    name='name'
                    onChange={handleChange}
                    value={values.name}
                />
                <input
                    type="text"
                    className='rounded border mb-2 px-4 py-2 w-full'
                    placeholder='Usonov'
                    name='surname'
                    onChange={handleChange}
                    value={values.surname}
                />
                <input
                    type="text"
                    className='rounded border mb-2 px-4 py-2 w-full'
                    placeholder='+996(***)** ** **'
                    name='number'
                    onChange={handleChange}
                    value={values.number}
                />
                <button
                    className='border rounded shadow-md mb-2 mt bg-amber-50 px-4 py-1'
                    onClick={createContact}
                >create
                </button>
            </div>
        </div>
    );
};

export default Contacts;