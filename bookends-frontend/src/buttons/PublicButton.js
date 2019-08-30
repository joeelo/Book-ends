import React from "react";
import styled from "styled-components";

const PubBtn = styled.button`
    padding: 10 20px;
`

const PublicButton = (props) => {
    console.log(props);
    return (
        <PubBtn>
            Make Public
        </PubBtn>
    )
}

export default PublicButton;