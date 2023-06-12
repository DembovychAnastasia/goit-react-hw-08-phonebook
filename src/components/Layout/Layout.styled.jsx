import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
  max-width: 800px;
  box-shadow: 0 0 10px 2px #f7d2f5be;
  background-color: #e3bce2b0;
`;

export const Header = styled.header`
  padding-bottom: 10px;
  margin: 0 auto;
  border-bottom: 2px solid transparent;
    border-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0));
    border-image-slice: 1;
`;

export const PageContainer = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 80vh;

  p.TextAuth {
    font-size: 20px;
    padding-top: 15px;
    text-align: center;
  }

  a {
    color:#f50057;
    &:hover,
    &:focus {
      color: rgb(57, 23, 23);
      text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
        rgba(0, 0, 0, 0.5) 1px 1px 1px;
    }
  }
`;

export const Footer = styled.footer`
font-size: 14px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-top: 3px solid transparent;
    border-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0));
    border-image-slice: 1;
  padding: 10px;

  a {
    color: #4a3939;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover,
    &:focus {
      color:  #f50057;
    }
  }
`;