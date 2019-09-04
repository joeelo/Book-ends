import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Thumbnail = styled.div`
    display: flex;
    width: 80%;
    margin: 10px auto;
    padding: 10px 0;
    border-bottom: 1px solid black;
`

const Image = styled.img`
    width: 62px;
    height: 125px;
`

const DescriptionContainer = styled.p`
    width: 70%;
    margin: 0 50px;
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`

const appendDots = (desc) => {
    if (desc.length < 160) {
        return `${desc.substring(0, 160)}...`
    } else {
        return desc
    }

}

const BookThumbnail = (props) => {
    const { book } = props;
    let bookDescription = book.volumeInfo.description
    // console.log(props);
        return (

                <Thumbnail>
                    <FlexColumn>
                        <Link to={`/book/${book.id}`} >
                            <p> {book.volumeInfo.title} </p>
                        </Link>
                        <p>avg rating - {book.volumeInfo.averageRating} </p>

                    </FlexColumn>

                        <Image alt="book thumbnail" src={book.volumeInfo.imageLinks.smallThumbnail}/>
                        <DescriptionContainer > {appendDots(bookDescription)}  </DescriptionContainer> 
                </Thumbnail>

        )
}

export default BookThumbnail;
