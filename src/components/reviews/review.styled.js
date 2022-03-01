import styled from "styled-components";

export const ScReviews = styled.div`
    background: var(--color-bg-dark);
    color: var(--color-bg-dark-text);

    /* <section> */

    .reviews__container {
    }

    .reviews__title {
        font-family: var(--font-family-alt);
        font-size: 1.7rem;
        font-weight: var(--fw-bolder);
    }

    .reviews__card-container {
    }

    /* reviews card */
    .reviews__card-card {
        width: 280px;
        margin: 2rem 0;
        padding: 1rem;
        background: var(--color-bg-dark-1);
    }

    .reviews__card-desc {
        margin: 1rem 0;
        line-height: 130%;
    }

    .reviews__card-name {
        font-family: var(--font-family-alt);
        letter-spacing: 1px;
        font-weight: var(--fw-bold);
    }
`;
