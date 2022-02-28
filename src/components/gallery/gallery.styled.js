import styled from "styled-components";
import { mobile, mobileMd, tablet } from "../../globalStyle/GlobalStyles";

export const ScGallery = styled.div`
    width: 100vw;
    max-width: 1200px;
    display; flex;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: var(--color-text-1);
    background: var(--color-bg-2);

    /* Gallery Datas */
    .gallery__container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* /420 */   
        ${mobile({ marginRight: "-15rem" })}
        /* 768 */

    }

    /* /420 */   
    /* 768 */
    /* 992 */
    /* 1200 */

    .gallery__datas{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    ${mobile({ flexDirection: "row" })}

    }

    /* Gallery Data Boxes */
    .gallery__data-card-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        /* 768 */
        ${mobileMd({
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: "2.5rem",
            columnGap: "3rem",
        })}
    }

    .gallery__data-card{
        width: 280px;
        /* /420 */   
        ${mobile({ marginLeft: "-6rem" })}
        /* 768 */
        ${mobileMd({ width: "250px" })}
        
    }

    .gallery__data-card-title{
        font-size: 1.5rem;
        max-width: 80%;
        margin-bottom: 1rem;
        font-weight: var(--fw-bold);
    }

    .gallery__data-card-paragraph{
        max-width: 90%;
    ${mobile({ maxWidth: "80%" })}

    }

    /* Gallery Images */
    .gallery__images-container{
        width: 100%;
        height: 100%;
    }
`;
