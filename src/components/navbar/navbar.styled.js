import styled from "styled-components";

export const ScNavbar = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--font-family-narrow);
    /* background: transparent; */
    cursor: pointer;
    background: var(--color-bg-1);
    color: var(--color-text);

    .navbar__logo {
        display: flex;
    }

    /* .navbar__logo:hover .navbar__logo-img {
        background: var(--color-brand);
    } */
    .navbar__logo-img:hover {
        background: var(--color-brand);
    }

    .navbar__logo-img {
        width: 50px;
        height: 60px;
        background: var(--color-bg-dark);
        color: var(--color-bg-dark-text);
        display: flex;
        align-items: flex-end;
        font-size: var(--fz-largest);
        padding-left: 0.85rem;
        position: fixed;
        top: 0;
        left: 10%;
        transition: 0.3s ease;
    }

    .navbar__logo-text {
        margin-left: 5.8rem;
        margin-bottom: 2rem;
        color: var(--color-text);
    }
    .navbar__logo-text1 {
    }
    .navbar__logo-text2 {
    }

    .navbar__links {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--color-bg-1);
        color: var(--color-text);
        padding-top: 50%;
        line-height: 400%;
        z-index: 10;
    }
    .navbar__links-ul {
        text-align: center;
    }

    .navbar__links-li {
        transition: 0.3s ease;
        letter-spacing: 0.1rem;

        &:hover {
            color: var(--color-brand);
        }
    }
`;
