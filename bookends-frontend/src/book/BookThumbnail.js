import React from 'react';
import { Link } from "react-router-dom";

const BookThumbnail = (props) => {
    const { book } = props
    console.log("book thumbnail")
        return (

                <div>
                    <Link to={`/book/${book.id}`} >
                        <p> {book.volumeInfo.title} </p>
                        <p> </p>
                    </Link>
                </div>

        )
}

export default BookThumbnail;
