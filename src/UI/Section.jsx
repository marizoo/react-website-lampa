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
        padding: 5.5rem 2rem;  
        ${mobile({ padding: "5rem 4rem" })};
        ${mobileMd({ padding: "6rem 6rem" })};
        ${tablet({ padding: "8rem 8rem" })};
        ${tabletMd({ padding: "10rem 10rem" })};
        ${laptop({ padding: "10rem 12rem" })};
        ${laptopMd({})};
}
`;

const Section = ({ children }) => {
    return <ScSection>{children}</ScSection>;
};

export default Section;
