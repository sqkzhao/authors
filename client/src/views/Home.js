import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'

export default () => {
    const [authors, setAuthors] = useState([])
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [deleted])
    
    const editAuthor = (e) => {
        navigate("/edit/" + e.target.id)
    }

    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/authors/' + e.target.id)
            .then(res => {
                setDeleted(!deleted)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to="/new">Add An Author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, i) => {
                        return <tr key={i}>
                            <td>{author.name}</td>
                            <td>
                                <button onClick={editAuthor} id={author._id}>Edit</button>
                                <button onClick={deleteAuthor} id={author._id}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}