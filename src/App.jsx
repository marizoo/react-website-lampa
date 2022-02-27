import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./components/hero/Hero";
import { GlobalStyles } from "./globalStyle/GlobalStyles";

const ScApp = styled.div`
    display: flex;
    align-items: center;
`;

const App = () => {
    const [mainCss, setMainCss] = useState("light");
    const toggleTheme = () => {
        setMainCss((currentCss) => (currentCss === "light" ? "dark" : "light"));
    };

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <GlobalStyles />
            <ScApp className={`${mainCss}-theme`}>
                <Hero />
            </ScApp>
        </>
    );
};

export default App;
