import React from "react";
import styled from "styled-components";
import { mobile, mobileMd } from "../globalStyle/GlobalStyles";

const ScSectionTitle = styled.div`
    display: flex;
    align-items: center;

    .section__title-line {
        width: 6px;
        height: 3rem;
        background: var(--color-brand);
        margin-right: 0.5rem;
        margin-bottom: 2rem;
    }

    .section__title-text {
        font-size: 2.3rem;
        font-family: var(--font-family-narrow);
        font-weight: var(--fw-bold);
        text-transform: uppercase;
        letter-spacing: 150%;
        transition: 0.4s ease;
        margin-bottom: 1.5rem;
        display: inline-block;
        width: 100%;
        height: 100%;
        font-family: var(--font-family-alt);
    }

    /* /420 */
    ${mobile({})}
    /* 576 */
    ${mobileMd({})} /* 768 */ 
    /* 992 */
`;

const SectionTitle = ({ children }) => {
    return (
        <ScSectionTitle>
            <div className="section__title-line"></div>
            <div className="section__title-text">{children}</div>
        </ScSectionTitle>
    );
};

export default SectionTitle;
