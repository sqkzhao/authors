import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'
import Form from '../components/Form'

export default (props) => {
    const { id } = props
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name)
            })
    }, [])

    const editAuthor = (author) => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
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
            <p>Edit this author</p>
            <Form submitProp={editAuthor} initialName={name} errors={errors} />
        </div>
    )
}