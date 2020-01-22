import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "../../styles/variables";

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${styles.colors.primary};
`;
const Icon = (props) => {
    return (
       <StyledIcon
         icon={["fas", "github"]}
         fixedWidth
         size="5x"
       />
    );
}
export default Icon;