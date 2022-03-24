import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {authorId, deleteCallBack} = props;


    const handlerDelete = (e) =>{
            axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res =>{
                deleteCallBack();
            })
            .catch(err => console.log(err))
    }

  return (
    <button onClick={handlerDelete} className="btn btn-danger">Delete</button>
  )
}

export default DeleteButton