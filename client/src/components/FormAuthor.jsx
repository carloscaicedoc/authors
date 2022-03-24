import React, { useState } from 'react';
import { Link, } from 'react-router-dom';

const FormAuthor = (props) => {
    const { initialName, initialBook, initialPublications, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const [book, setBook] = useState(initialBook);
    const [publications, setPublications] = useState(initialPublications);


    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name, book, publications });
    }

    return (
        <div className="card py-5 mt-3 container bg-light" style={{ width: 650 + "px"}}>

            <form onSubmit={submitHandler}>
                
                <div className="row align-items-center mb-3">
                    <div className="col">
                        Author Name:
                    </div>
                    <div className="col-8 me-5">
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" className="form-control" />
                    </div>
                </div>
                <div className="row align-items-center mb-3">
                    <div className="col">
                        Famous Book:
                    </div>
                    <div className="col-8 me-5">
                        <input onChange={(e) => setBook(e.target.value)} value={book} type="text" name="book" className="form-control" />
                    </div>
                </div>
                <div className="row align-items-center mb-3">
                    <div className="col">
                        Number of Books Published:
                    </div>
                    <div className="col-8 me-5">
                        <input onChange={(e) => setPublications(e.target.value)} value={publications} type="text" name="publications" className="form-control" />
                    </div>
                </div>
                <div className="d-flex justify-content-center ms-5 gap-2 mb-4">
                    <Link to='/' className="btn btn-danger text-white px-4">Cancel</Link>
                    <input className="btn btn-warning text-dark px-4" type="submit" value="Submit" />
                </div>
                {
                    errors &&
                    errors.map((err, idx)=>
                    <p key={idx} className="alert bg-dark text-danger my-2 mx-4 py-2">{err}</p>)
                }
            </form>
        </div>
    )
}

export default FormAuthor