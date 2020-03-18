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
            <p className="mt-3">
                <button onClick={() => navigate('/')} className="btn btn-secondary btn-sm mr-2">Cancel</button>   {/* -> onSubmitHandler */}
                <input type="submit" className="btn btn-primary btn-sm" />
            </p>
        </form>
    )
}
export default Form


