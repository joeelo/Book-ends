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
    width: 80px;
    height: 125px;
`

const DescriptionContainer = styled.p`
    width: 70%;
    margin: 0 50px;
    font-family: Lato, sans-serif;
`

const RatingTag = styled.p`
    font-family: Lato, sans-serif;
    font-size: 14px;
`

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`

const BookTitle = styled.p`
    font-family: Playfair Display, serif;
    padding-right: 5px;
`

const appendDots = (desc) => {
    if (desc !== undefined) {
        if (desc.length > 240) {
            return `${desc.substring(0, 240)}...`
        } else {
            return desc
        }
    }
}

function BookThumbnail(props) {
        return (
                <Thumbnail>
                    <FlexColumn>
                        <Link to={`/book/${props.book.id}`} >
                            <BookTitle> {props.book.volumeInfo.title || ""} </BookTitle>
                        </Link>
                        <RatingTag> Avg Rating - {props.book.volumeInfo.averageRating} </RatingTag>
                    </FlexColumn>
                        {
                            props.book.volumeInfo.imageLinks !== undefined 
                            ? <Image alt="book thumbnail" src={props.book.volumeInfo.imageLinks.smallThumbnail}/>
                            : null
                        }
                        <DescriptionContainer> {appendDots(props.book.volumeInfo.description)}  </DescriptionContainer> 
                </Thumbnail>
        )
}

BookThumbnail.defaultProps = {
    name: "JOhn Markus"
}

export default BookThumbnail;
