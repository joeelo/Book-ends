import React from 'react'

const BookThumbnail = (props) => {
    const { book } = props
    console.log(book)
        return (
            <div>
                    <p>{book.volumeInfo.title}</p> 
            </div>
        )
}

export default BookThumbnail;
