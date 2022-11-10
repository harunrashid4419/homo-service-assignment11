import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h2>4O4</h2>
            <h2>opps! This page is not available</h2>
            <p>Go to <Link to='/'>Home Page</Link> </p>
        </div>
    );
};

export default ErrorPage;