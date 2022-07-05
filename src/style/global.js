import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
}

a{
    text-decoration: none;
    color: var(--grey-0);

    line-height: 21px;
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-dark: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: #3FE864;
    --negative: #E83F5B;

}

`;
