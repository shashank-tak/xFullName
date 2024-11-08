import React, { useEffect, useState } from 'react';

const FullName = () => {

    // const firstName = "john";
    // const lastName = "wick";

    const [fullName, setFullName] = useState({firstName: '',lastName: ''});
    const [toggleSubmit, setToggleSubmit] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFullName((prev) => ({
            ...prev,
            [name]: value,
        }));
        setToggleSubmit(false); 
    };

    const handleSubmit = () => {
        if(fullName.firstName !== '' && fullName.lastName !== '')
        {
            setToggleSubmit(true);
        }
    };

    return (
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start', paddingLeft: '10px'}}>
            <h1>Full Name Display</h1>
            <div>
                <label>First Name:</label>
                <input label='First Name' name='firstName' type='text' value={fullName.firstName} onChange={handleInputChange} required/>
            </div>
            <div>
                <label>Last Name:</label>
                <input label='First Name' name='lastName' type='text' value={fullName.lastName} onChange={handleInputChange} required/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            {toggleSubmit && <p>Full Name: {fullName.firstName} {fullName.lastName}</p>}
        </form>
    );
};

export default FullName;