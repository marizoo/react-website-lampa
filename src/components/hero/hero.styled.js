import styled from "styled-components";

export const ScHero = styled.div`
    width: 100vw;
    height: 80vh;
    max-width: 1200px;
    display; flex;
    align-items: center;
    position: relative;
    /* background: rgba(4, 97, 41, 0.747); */
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-text);

    &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* background: linear-gradient(
        270deg,
        rgba(4, 97, 41, 1) 0%,
        rgba(74, 141, 101, 1) 55%,
        rgba(254, 254, 254, 1) 100%
    ); */
    /* background: linear-gradient(270deg, rgb(120, 148, 131) 0%, rgb(118, 158, 134) 55%, rgb(120, 148, 131) 0%, rgb(154, 206, 175) 100%);  */
    background: var(--color-bg-1);
    }

    .hero__datas{
        width: 100%;
        height: 100%;
        background: pink;
    }

    .hero__titles{}
    .hero__titles-1{}
    .hero__titles-2{}

    .hero__subtitles{
        margin-top: 2rem;

    }
    .hero__subtitles-1{}
    .hero__subtitles-2{}

    .hero__button{
        margin-top: 2rem;
        width: 50%;
    }
`;
