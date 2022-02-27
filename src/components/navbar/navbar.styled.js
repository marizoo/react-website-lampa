import styled from "styled-components";

export const ScNavbar = styled.div`
    width: 100%;
    height: 6rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    color: var(--color-text);
    font-family: var(--font-family-narrow);
    cursor: pointer;

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
    }

    .navbar__logo-text {
        margin-left: 5.8rem;
        margin-bottom: 2rem;
    }
    .navbar__logo-text1 {
    }
    .navbar__logo-text2 {
    }

    .navbar__links {
    }
    .navbar__links-ul {
    }
    .navbar__links-li {
    }
`;
