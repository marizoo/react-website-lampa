import styled from "styled-components";
import {
    mobile,
    mobileMd,
    tablet,
    tabletMd,
} from "../../globalStyle/GlobalStyles";

/* BRANCHES ---------------- */
/* 00. */
/* <Section> */
/* __ 00.1. */
/* ____ 00.1.A. -datas- */
/* _______ 00.1.A.0 */
/* __________ 00.1.A.0.a */
/* _____________ 00.1.A.0.a.1  */
/* _____________ 00.1.A.0.a.2  */
/* ____ 00.1.B. -images- */
/* _______ 00.1.B.0 */
/* __________ 00.1.B.0.a */
/* _____________ 00.1.B.0.a.1  */
/* _____________ 00.1.B.0.a.2  */

/* 00.*/
export const ScGallery = styled.div`
    width: 100vw;
    height: 100%;
    color: var(--color-text-1);
    background: var(--color-bg-2);

    /* <Section> */

    /* 00.1.*/
    .gallery__container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    /* 00.1.A. ------------------------- */
    .gallery__datas {
        width: 100%;
        height: 100%;
    }

    /*  <SectionTitle> component*/

    /* 00.1.A.0 */
    .gallery__card-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        /* media 576 */
        ${mobileMd({ gap: "2rem" })};
        /* media 768 */
        align-items: center;
        ${tablet({ flexDirection: "row", flexWrap: "wrap" })} */
    }

    /* 00.1.A.0.a */
    .gallery__card {
        width: 280px;
        height: auto;
        padding: 1.5rem;
        margin-bottom: 1rem;
        background: var(--color-bg-1);

        /* media 420 */
        ${mobile({ width: "290px" })}
        /* media 576 */
        ${mobileMd({ width: "310px" })}
        /* media 768 */
        ${tablet({ width: "320px" })} */
        /* media 992 */
        ${tabletMd({ width: "300px" })}
    }

    /* 00.1.A.0.a.1  */
    .gallery__card-title {
        font-size: 1.7rem;
        margin-bottom: 1rem;
        width: 80%;
    }

    /* 00.1.A.0.a.2  */
    .gallery__card-desc {
        line-height: 130%;
        width: 100%;
        /* media 576 */
        ${mobileMd({ width: "80%" })};
    }

    /* 00.1.B. ------------------------- */
    .gallery__images {
        width: 100%;
        height: 100%;
    }

    /* 00.1.B.0 */
    .gallery__images-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0;
    }

    /*  00.1.B.0.a */
    .gallery__images-card {
        width: 280px;
        height: 500px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        background: var(--color-bg-1);
        position: relative;
        margin: 0 0 2rem;
    }

    /* 00.1.B.0.a.1  */
    .gallery__images-card-img {
        background: lightblue;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    /* 00.1.B.0.a.2  */

    .gallery__images-card-title {
        font-size: 1rem;

        color: black;
        position: absolute;
        top: 5%;
        left: 5%;
    }
`;

/* MEDIA QUERIES --------------  */
/* media 420 */
/* ${mobile({})} */
/* media 576 */
/* ${mobileMd({})} */
/* media 768 */
/* ${tablet({})} */
/* media 992 */
/* ${tabletMd({})} */
/* media 1200 */
/* ${laptop({})} */
