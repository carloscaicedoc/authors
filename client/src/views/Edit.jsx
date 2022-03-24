import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import FormAuthor from '../components/FormAuthor';

const Edit = (props) => {
  const { id } = useParams();
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res.data)
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [])

  const updateAuthor = (author) => {
    axios.put(`http://localhost:8000/api/authors/${id}`, author)
      .then(res => {
        props.refreshList()
        history.push('/')
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
      <h1 className="mt-4">Edit Author</h1>
      <>
        {loaded ?
          <FormAuthor onSubmitProp={updateAuthor}
            initialName={author.name}
            initialBook={author.book}
            initialPublications={author.publications}
            authorId={author._id}
            errors={errors}
          /> :
          <h1 style={{ color: "red" }}>
            Apologies! Author not found. Would you like to add this author to our database?
          </h1>
        }
      </>
    </>
  )
}

export default Edit