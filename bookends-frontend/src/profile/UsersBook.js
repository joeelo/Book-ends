import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
    width: 50px;
`

const UsersBook = (props) => {
    const info = props.book.any
    return (
        <div>
            
            <Link to={`/book/${info.id}`} >
                <Image src={info.volumeInfo.imageLinks.smallThumbnail} />
                {/* <p>{info.volumeInfo.title} - {info.volumeInfo.subtitle}</p> */}
            </Link>
            
        </div>
    )
}

export default UsersBook;