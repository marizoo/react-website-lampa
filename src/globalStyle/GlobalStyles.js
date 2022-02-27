import { css, createGlobalStyle } from "styled-components";

// ALL GLOBAL STYLE
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
/* font-family: 'Archivo Narrow', sans-serif; */
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600;700&display=swap');


*,
*::before,
*::after,
body, 
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif; 
}

img {
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    color: inherit;
}

button{
    cursor: pointer;
    color: inherit;
    font-family: inherit;
}

ul {
    list-style: none;
    color: inherit;
    margin: 0;
    padding: 0;
}

/*=============== SCROLL BAR ===============*/
::webkit-scrollbar{
    width: .6rem;
    background-color: hsl(206, 4%, 80%);
}
::webkit-scrollbar-thumb{
    background-color: hsl(206, 4%, 64%);
}
::webkit-scrollbar-thumb:hover{
    background-color: hsl(206, 4%, 48%);
}



/*=============== ROOTS ===============*/
:root{

.light-theme{
/* ----- Colors ------ */
--color-brand: #e29301;
--color-brand-dark: #b87803;
--color-brand1: #069c5480;
--color-white: #fff;
--color-text-light: #A6A6A6;
/*  the colors below have a dark themed version: refer to: REF: A001 (line +- 55  ) */
--color-title: #393939;
--color-text: #707070;
--color-bg-1: #f8f8f8;
--color-bg-2: #f0efef;
--color-bg-dark: #1d1d1d;
--color-bg-dark-text: #d8d7d7;

.dark-theme{
--color-title: #F1F3F2;
--color-text: #C7D1CC;
--color-bg-1: #171d1a;
--color-bg-2: #101412;
--color-bg-dark: #d8d8d8;
--color-bg-dark-text: #1d1d1d;
}

/* ----- Font Weight ----- */
    --fw-medium: 500;
    --fw-semi-bold: 600;
    --fw-bold: 700;
    --fw-bolder: 800;

/* ----- Z Index ----- */
    --z-tooltip: 10;
    --z-fixed: 100;

/* --- Typography ----- */
--font-family: 'Poppins', sans-serif;
--font-family-narrow:'Archivo Narrow', sans-serif;

/* --------  Font Size  -------*/
--fz-largest: 2.25rem;
--fz-h1: 1.5rem;
--fz-h2: 1.25rem;
--fz-h3: 1rem;
--fz-normal: 0.938rem;
--fz-small: 0.813rem;
--fz-smaller: 0.75rem;

@media screen and (min-width: 768px){
    --fz-largest: 4rem;
    --fz-h1: 2.25rem;
    --fz-h2:: 1.5rem;
    --fz-h3: 1.25rem;
    --fz-normal: 1rem;
    --fz-small: .875rem;
    --fz-smaller: .813rem;
}
}

/* REF: A001. ----- Dark Theme ----- */
body.dark-theme{
    --color-title: #F1F3F2;
--color-text: #C7D1CC;
--color-bg-1: #171d1a;
--color-bg-2: #101412;
--color-bg-dark: #d8d8d8;
--color-bg-dark-text: #1d1d1d;
}



`;
