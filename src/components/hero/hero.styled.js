import styled from "styled-components";

export const ScHero = styled.div`
    width: 100vw;
    height: 80vh;
    max-width: 1200px;
    display; flex;
    align-items: center;
    position: relative;
    background: rgba(4, 97, 41, 0.747);
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
        270deg,
        rgba(4, 97, 41, 1) 0%,
        rgba(74, 141, 101, 1) 55%,
        rgba(254, 254, 254, 1) 100%
    );
    }
`;
