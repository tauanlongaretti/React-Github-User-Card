import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const StyledIcon = styled(FontAwesomeIcon)`
    color: #dcdde1;
    font-size: 60px;
    margin: 10% 0% 10% 7%;;
`;

const StyledImg = styled.img`
    border-radius: 20px;
    border: #dcdde1 solid 2px;
    width: 250px;
    height: 275px;
    margin-left: 10%;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 5% 12%;
    padding: 3%;
    background-color: #40739e;
    border-radius: 10px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 1);
`;

const InfoDiv = styled.div`
    margin-left: 50px;
    color: #dcdde1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 1);
    font-size: 20px;
    padding: 0 20px;
`;


class MyCard extends React.Component {

    state = {
        user: []
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/tauanlongaretti")
            .then(response => {
                console.log(response);
                this.setState({ ...this.state, user: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <StyledDiv>
                <StyledImg src={this.state.user.avatar_url}/>
                <InfoDiv>
                    <h3>{this.state.user.name}</h3>
                    <p>{this.state.user.location}</p>
                    <p>{this.state.user.bio}</p>
                    <p>ID: {this.state.user.id}</p>
                    <p>Repos: {this.state.user.public_repos}</p>
                </InfoDiv>
                    <StyledIcon icon={faGithub} />
            </StyledDiv>
        )
    }
}

export default MyCard;