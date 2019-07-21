import React, { useState } from 'react'
import BookDetails from "./BookDetails";


const BookThumbnail = (props) => {
    const [renderBook, setRenderBook] = useState(false);
    const { book } = props
        return (
            <div onClick={() => setRenderBook(!renderBook)}>

                {!renderBook ? <p>{book.volumeInfo.title}</p> : <BookDetails book={book}/>}
                 
            </div>
        )
}

export default BookThumbnail;
