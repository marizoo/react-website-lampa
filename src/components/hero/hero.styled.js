import styled from "styled-components";

export const ScHero = styled.div`
    width: 100vw;
    height: calc(100vh - 6rem);
    max-width: 1200px;
    display; flex;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: var(--color-text-1);

    &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: var(--color-bg-1);
    }

    .hero__datas{
        width: 100%;
        height: 100%;
        
    }

    .hero__titles{
        color: var(--color-text-1);
    }
    .hero__titles-1{}
    .hero__titles-2{}

    .hero__subtitles{
        margin-top: 2rem;
        color: var(--color-text-2);
    }
    .hero__subtitles-1{}
    .hero__subtitles-2{}

    .hero__button{
        margin-top: 2rem;
        width: 50%;
    }
`;
