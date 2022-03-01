import styled from "styled-components";

export const ScPrice = styled.div`
    background: var(--color-bg-1);
    color: var(--color-text-1);

    .price__container {
    }

     {
    }

    .price__card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .price__card {
        border-top: 1px solid var(--color-text-1);
        border-bottom: 1px solid var(--color-text-1);
        margin-bottom: 2.5rem;
        background: var(--color-bg-2);
        width: 280px;
    }

    /* 00.1.A.0.a */
    .price__card-title {
        font-size: 1.7rem;
        margin: 0.75rem 0 2rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--color-text-1);
        font-family: var(--font-family-alt);
    }

    /* 00.1.A.0.b */
    .price__card-desc {
        padding: 0 1rem;
    }

    /* 00.1.A.0.b.1 */
    .price__card-desc-ul {
        list-style: square;
    }

    /* 00.1.A.0.b.1.1 */
    .price__card-desc-li {
        margin-bottom: 0.7rem;
    }

    /* 00.1.A.0.c */
    .price__card-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0;
    }

    /* 00.1.A.0.c.1 */
    .price__card-number {
        font-size: 1.4rem;
        font-weight: var(--fw-bolder);
        font-family: var(--font-family-alt);
    }

     {
        /* <Button> */
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
