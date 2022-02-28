import React from "react";
import styled from "styled-components";
import {
    laptop,
    laptopMd,
    mobile,
    mobileMd,
    tablet,
    tabletMd,
} from "../globalStyle/GlobalStyles";

const ScSection = styled.div`
        width: 100%;
        max-width: 1200px;
        height: 100%;
        padding: 4.5rem 2rem;  
        overflow: hidden;
        ${mobile({ padding: "4.75rem 2.5rem" })};
        ${mobileMd({ padding: "5rem 3rem" })};
        ${tablet({ padding: "5.25rem 3.5rem" })};
        ${tabletMd({ padding: "5.5rem 4rem" })};
        ${laptop({ padding: "6rem 6rem" })};
        ${laptopMd({})};
}
`;

const Section = ({ children }) => {
    return <ScSection>{children}</ScSection>;
};

export default Section;
