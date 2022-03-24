import React, { useState } from 'react';
import axios from 'axios';
import FormAuthor from '../components/FormAuthor'
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const createAuthor = ath => {
        axios.post(`http://localhost:8000/api/authors/new`, ath)
            .then(res => {
                history.push('/')
                console.log(res)
            })
            .catch(err => {
                console.log(err.response);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
              })
    }

    return (
        <>
            <h1 className="mt-4">Add Author</h1>
            <FormAuthor onSubmitProp={createAuthor}
                initialName=""
                initialBook=""
                initialPublications=""
                errors={errors}
            />
        </>
    )
}

export default Create