import styled from 'styled-components';

export const UserTitle = styled.div`
  border-top: 3px solid transparent;
    border-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0));
    border-image-slice: 1;
  display: flex;
  gap: 15px;
  justify-content: center;
  padding-top: 10px;

  p {
    font-size: 22px;
  }
  span {
    font-weight: 700;
  }

  button {
    display: inline-block;
    padding: 5px 10px;
    margin: 0px 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #f50057;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;

    &:hover,
    &:focus {
      background-color: #c51162;
      color: #fff;
      cursor: pointer;
    }
  }
`;