import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import DeleteButton from './DeleteButton';

const DisplayBooks = (props) => {
    const { refresh, refreshList } = props
    const [authors, setAuthors] = useState(null)

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/authors`)
    //         .then(res => setAuthors(res.data))
    //         .catch(err => console.log(err))
    // }, [refresh])

    // Sorting Authors Alphabetically
    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                // console.log(res.data.authors);
                let allAuthors = res.data;
                allAuthors.sort((a,b)=>{
                    if(a.name.toUpperCase()<b.name.toUpperCase()){
                        return -1;
                    }
                    if(a.name.toUpperCase()>b.name.toUpperCase()){
                        return 1; 
                    }
                    return 0;
                })
                setAuthors(allAuthors);
            })
            .catch(err=>console.log(err));
    }, []);

    const removeFromDom = (authorId) =>{
        setAuthors(authors.filter(author => (author, author._id !== authorId)))
    }

    return <>
        <h2 className="fs-2 mt-3">Writer Members</h2>
        {authors ? (
            <div className="container col-7">

                <table className="table mx-auto">
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Number of Publications</td>
                            <td>Famous Book</td>
                            <td colSpan={2}>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, i) => (
                                <tr key={i}>
                                    <td className="fw-bold">{author.name}</td>
                                    <td>{author.publications}</td>
                                    <td>{author.book}</td>
                                    <td> <Link to={`edit/${author._id}`} className="btn btn-success">Edit</Link></td>
                                    <td> <DeleteButton authorId={author._id} className="btn btn-danger text-dark"
                                    deleteCallBack={()=>removeFromDom(author._id)}>Delete</DeleteButton></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        ) :
            <h3>Loading Authors ...</h3>
        }
    </>
}

export default DisplayBooks;