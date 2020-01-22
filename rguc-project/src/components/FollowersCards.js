import React from "react";
import axios from "axios";
import Followers from "./Followers";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class FollowersCards extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/tauanlongaretti/followers")
            .then(response => {
                console.log(response);
                this.setState({ ...this.state, users: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (            
            <StyledDiv>
                {this.state.users.map(card => (
                <Followers
                    key={card.id} 
                    login={card.login}
                    avatar_url={card.avatar_url}
                    id={card.id}
                />
                ))}
            </StyledDiv>
        )
    }
}

export default FollowersCards;