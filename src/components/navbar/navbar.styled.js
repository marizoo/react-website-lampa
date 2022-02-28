import styled from "styled-components";

export const ScNavbar = styled.div`
    width: 100%;
    cursor: pointer;
    position: relative;

    .navbar__container {
        width: 100%;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        font-family: var(--font-family-narrow);
        background: var(--color-brand-alt);
        color: var(--color-text);
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        z-index: 12;
    }

    .navbar__logo {
        display: flex;
        position: fixed;
        top: 0;
        left: 10%;
    }

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

        transition: 0.3s ease;
    }

    .navbar__logo-text {
        margin-left: rem;
        color: var(--color-black);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-left: 1rem;
        margin-top: 1.5rem;
    }
    .navbar__logo-text1 {
    }
    .navbar__logo-text2 {
    }

    /* THE SHOW-MENU ON MOBILE */
    .navbar__links {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        /* right: 0; */
        right: -100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--color-bg-dark);
        color: var(--color-bg-dark-text);
        padding-top: 50%;
        line-height: 400%;
        transition: 0.4s ease;
        z-index: 10;
    }

    .navbar__active {
        right: 0;
    }

    .navbar__links-ul {
        text-align: center;
    }

    .navbar__links-li {
        font-weight: var(--fw-medium);
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        transition: 0.3s ease;

        &:hover {
            color: var(--color-brand);
        }
    }
`;
