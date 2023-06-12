import styled from 'styled-components';

export const SectionHome = styled.section`
  h1 {
    /* font-size: 55px;
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px; */

 margin-bottom: 10px;
 text-align: center;
 margin: 10 auto;
  font-size: 30px;
  font-weight: 700;
  background: linear-gradient(to right, #833ab4, #f50057, #fcb045, #b345fc) 47%
    0%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

  }
  p {
     font-size: 24px;
    /* color: rgb(57, 23, 23); */
    text-align: center; 
  
    font-weight: 500;
    background: linear-gradient(90deg,#833ab4,#f50057,#fcb045,#b345fc) 47% 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }
  span {
    font-size: 14px;
    color: rgb(57, 23, 23);
    text-align: center; 
    display: block;
    justify-content: center;
  }
`;

export const RegForm = styled.div`
max-width: 800px;
  h2 {
    text-align: center;
    font-size: 28px;
    color:#f50057;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
`;