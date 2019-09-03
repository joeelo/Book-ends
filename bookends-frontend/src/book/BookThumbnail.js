import React from 'react';
import { Link } from "react-router-dom";

const BookThumbnail = (props) => {
    const { book } = props;
    // console.log(props);
        return (

                <div>

                    <Link to={`/book/${book.id}`} >
                        <p> {book.volumeInfo.title} </p>
                    </Link>
                        <p>avg rating - {book.volumeInfo.averageRating} </p>
                        {/* <img alt="book thumbnail" src={book.volumeInfo.imageLinks.smallThumbnail}/> */}
                </div>

        )
}

export default BookThumbnail;
