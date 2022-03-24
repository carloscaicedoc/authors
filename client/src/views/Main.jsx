import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DisplayBooks from '../components/DisplayBooks';

const Main = (props) => {
    const { refresh } = props;

    return (
        <>
            <h1 className="mt-4">Authors Club</h1>
            <Link to={`/new`} className="btn btn-primary">Add Author</Link>
            <DisplayBooks refresh={refresh}/>
        </>
    )
}

export default Main