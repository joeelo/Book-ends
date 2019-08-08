import React from 'react'

const clickHandler = (book) => {
    console.log(book);
    const id = book.user.id
    const url = `http://localhost:3000/books` 
    const data = {
        any: book,
        user: id,
        finished: true
    };
    return fetch(url, {
        method: "POST",
        mode: "cors", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
    });
}

const AddReadBook = (props) => {
    console.log(props);
    return (
        <div>

            <button onClick={() => clickHandler(props)}> Read </button>

        </div>
    )
} 

export default AddReadBook