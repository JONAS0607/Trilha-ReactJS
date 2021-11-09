import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #f0f2f5;
  --red: #E62E4D;
  --green: #33CC95;
  --blue: #5429cc;
  --blue-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #ffffff;
  font-size:62.5%; // defino font padrão para 10px

}
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
// font-size desktop 16px
html {
  @media(max-width:1080px){
    font-size: 1.5rem; // 16px * (93.75/100) = 15px 
  }
  @media(max-width:720px){
    font-size: 1.4rem; // 16 = 100% | 14 = x => (14*100)/16 => 87,5px
  }
 
}
body {
  
  background:var(--background);
  -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

}
h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}
button{
  cursor: pointer;
}
[disabled]{
  opacity:0.6 ;
  cursor: not-allowed;
}
.react-modal-overlay{
 background: rgba(0, 0, 0, 0.5);

 position:fixed;
 top:0;
 right:0;
 bottom:0;
 left:0;

 display:flex;
 align-items:center;
 justify-content:center;
}
.react-modal-content{
  background: var(--background);
  width:100%;
  max-width: 570px;
  padding:4.8rem;
  position:relative;
  border-radius: .4rem;

}
.react-modal-close{
  position: absolute;
  right: 2.4rem;
  top:2.4rem;
  border:0;
  background:transparent;
  transition: .2s;
  &:hover{
    filter:brightness(.7);
  }
}
`;
