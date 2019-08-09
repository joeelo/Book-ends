import React from 'react';
import { Link } from "react-router-dom";

const BookThumbnail = (props) => {
    const { book } = props;
    console.log(props);
        return (

                <div>

                    <Link to={`/book/${book.id}`} >
                        <p> {book.volumeInfo.title} </p>
                    </Link>
                        <p>avg rating - {book.volumeInfo.averageRating} </p>
                </div>

        )
}

export default BookThumbnail;
