import React from 'react'

const clickHandler = (props) => {
    console.log(props.book);
    console.log(props.user);
    const url = `http://localhost:3000/books` 
    const data = {
        any: props.book,
        user: props.user,
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

    return (
        <div>

            <button onClick={() => clickHandler(props)}> Read </button>

        </div>
    )
} 

export default AddReadBook