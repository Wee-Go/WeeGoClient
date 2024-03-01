import styled from "styled-components";

export const DivBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Adiciona um fundo escuro semi-transparente */
  display: flex;
  justify-content: center; /* Alinha horizontalmente */
  align-items: center; /* Alinha verticalmente */
`;

export const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 20%;
  height: max-content;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;

  > p {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 800;
    transition: 0.7s;
  }
  > p:hover {
    transform: scale(1.3);
  }

  > h2 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  > input {
    width: 80%;
    padding: 0.4rem;
    border-radius: 5px;
    border: 2px solid #00000040;
  }

  > button {
    padding: 0.6rem 2.3rem;
    border-radius: 10px;
    border: none;
    color: #f2f2f2;
    background-color: #7d2cf8;
    transition: 0.7s;
  }
  > button:hover {
    background-color: #3e1077;
  }
  > span {
    color: red;
    font-weight: 600;
    font-size: 0.7rem;
  }
`;
