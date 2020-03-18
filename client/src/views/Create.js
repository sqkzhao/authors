import React, { useState } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import { Link, navigate } from '@reach/router'

export default () => {
    const [errors, setErrors] = useState([])

    const createAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }
    return(
        <div>
            <Link to='/'>Home</Link>
            <p>Add a new author:</p>
            <Form submitProp={createAuthor} initialName='' errors={errors} />
        </div>
    )
}