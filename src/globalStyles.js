import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  --color-primary:#F1F5F9;
  --color-secondary:#4A3780;
  --color-secondary-dark:#917FB3;
  --color-light:#fff;
  --color-dark:grey;
  --primary-cta:#fff;
  --color-success:#006400
  
}
.dark{
  color:var(--color-light);
  background-color: #28231d;
}
.light{
  background-color: #E7E2F3;
}
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
}
.App{
  display:grid;
  grid-gap: 1rem;
  grid-template-areas: "nav nav"
  "aside main";
}
.aside{
  grid-area: aside;
  position:fixed;
  left:0;
  top:13vh;

}
.header-wrapper{
  grid-area: nav;
  position: fixed;
  top:0;
}
.section{
  grid-area: main;
  display:flex;
  justify-content: space-between;
  padding-top:13vh; 
  min-height: 97.5vh;
}
@media only screen and (max-width:768px){
  html{
    font-size:65%;
  }
  .aside{
    display:none;
  }
  .section{
    justify-content:center;
    margin-bottom:3rem;
  }
  .App{
 
  grid-template-areas: "nav nav"
  "main main";
}
}
`;

export default GlobalStyle;
