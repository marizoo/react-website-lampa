import React from "react";
import styled from "styled-components";
import { mobile, mobileMd } from "../globalStyle/GlobalStyles";

const ScSectionTitle = styled.div`
    font-size: 3rem;
    font-family: var(--font-family-narrow);
    font-weight: var(--fw-bold);
    letter-spacing: 150%;
    transition: 0.4s ease;
    margin-bottom: 1.5rem;

    /* /420 */
    ${mobile({
        transform: "rotate(270deg)",
        transformOrigin: "top left",
        marginTop: "12rem",
    })}/* 576 */
    /* 768 */
    /* 992 */
`;

const SectionTitle = ({ children }) => {
    return <ScSectionTitle>{children}</ScSectionTitle>;
};

export default SectionTitle;

// @media screen (min-width: 500px) {
//     transform: rotate(270deg);
/* Safari */
// -webkit-transform: rotate(270deg);

/* Firefox */
// -moz-transform: rotate(270deg);

/* IE */
// -ms-transform: rotate(270deg);

/* Opera */
// -o-transform: rotate(270deg);

/* Internet Explorer */
// filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
