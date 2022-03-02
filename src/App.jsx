import React, { useState } from "react";
import styled from "styled-components";
import Datas from "./components/datas/Datas";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Price from "./components/price/Price";
import Reviews from "./components/reviews/Reviews";
import { GlobalStyles } from "./globalStyle/GlobalStyles";
import Hamburger1 from "./UI/Hamburger1";
import ToggleTheme from "./UI/ToggleTheme";

const ScApp = styled.div`
    display: flex;
    flex-direction: column;
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
                <ToggleTheme onToggleTheme={toggleTheme} mainCss={mainCss} />
                <Hamburger1
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <Navbar toggleMenu={toggleMenu} />
                <Hero />
                <Gallery />
                <Price />
                <Reviews />
                <Datas />
            </ScApp>
        </>
    );
};

export default App;
