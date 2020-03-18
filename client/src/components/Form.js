import React, { useState } from 'react'
import { navigate } from '@reach/router'

const Form = ({ submitProp, initialName, errors }) => {
    const [name, setName] = useState()
    const onSubmitHandler = (e) => {
        console.log("submit..")
        e.preventDefault()
        submitProp({name})
    }
    
    return(
        <form onSubmit={onSubmitHandler}>
            {errors.map((error, i) => <p key={i}>{error}</p>)}
            <label>Name:</label>
            <input type="text" placeholder={initialName} onChange={e => setName(e.target.value)} />
            <p>
                <button onClick={() => navigate('/')}>Cancel</button>   {/* -> onSubmitHandler */}
                <input type="submit" />
            </p>
        </form>
    )
}
export default Form


