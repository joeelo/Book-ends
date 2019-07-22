import React, { useState } from 'react';
// import BookDetails from "./BookDetails";
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import BookDetails from './BookDetails';

const BookThumbnail = (props) => {

    const { book } = props
        return (

                <div>
                    <Link to={`/book/${book.id}`} >
                    <p> {book.volumeInfo.title} </p>
                    </Link>
                </div>

        )
}

export default BookThumbnail;
