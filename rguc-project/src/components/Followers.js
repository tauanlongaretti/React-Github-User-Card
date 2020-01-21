import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
    border-radius: 20px;
    border: #dcdde1 solid 2px;
    width: 180px;
    margin-bottom: 8%;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 3% 2%;
    padding: 3% 4%;
    background-color: #487eb0;
    border-radius: 10px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 1);
`;

const InfoDiv = styled.div`
    color: #dcdde1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 1);
    font-size: 16px;
`;


const Followers = props => {
    return(
        <StyledDiv>
            <StyledImg src={props.avatar_url}/>
            <InfoDiv>
                <p>Login: {props.login}</p>
                <p>ID: {props.id}</p>
            </InfoDiv>
        </StyledDiv>
    )
}

export default Followers;