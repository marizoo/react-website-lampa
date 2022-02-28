import React from "react";
import styled from "styled-components";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { laptop, tablet } from "../globalStyle/GlobalStyles";

const ScToggleTheme = styled.div`
    cursor: pointer;
    font-size: 1.25rem;
    position: fixed;
    top: 4rem;
    right: 1.35rem;
    transition: all 0.3s ease;
    ${laptop({ fontSize: "25px" })};
    ${tablet({ fontSize: "18px" })};
    color: var(--color-gray);
    z-index: 13;
`;

const ToggleTheme = ({ onToggleTheme, mainCss }) => {
    return (
        <ScToggleTheme onClick={onToggleTheme}>
            {mainCss === "light" ? <RiMoonLine /> : <RiSunLine />}
        </ScToggleTheme>
    );
};

export default ToggleTheme;
