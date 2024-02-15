import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 8rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  height: 100%;
  width: 50%;

  > button {
    background-color: #e3c9ff;
    border: none;
    width: max-content;
    padding: 0.8rem 2.2rem;
    color: #7d0df8;
    font-weight: 800;
    font-size: 1rem;
    margin-top: 10%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > h1 {
    font-weight: 800;
    font-size: 1.813rem;
    color: #3a3a3a;
  }
  > label {
    font-weight: 800;
    font-size: 1.813rem;
    color: #7d0df8;
  }
  > input[type="text"] {
    background-color: #d9d9d9;
    height: 100%;
    border: none;
    padding: 1rem 1rem;
    width: 60%;
  }
  > button {
    background-color: #e3c9ff;
    border: none;
    width: max-content;
    padding: 0.8rem 2.2rem;
    color: #7d0df8;
    font-weight: 800;
    font-size: 1rem;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  > input[type="file"] {
    display: none;
  }
  > label {
    background-color: #eabcbc;
    color: #000000;
    font-weight: 400;
    font-size: 1.8rem;
    border: none;
    border-radius: 8px;
    width: max-content;
    padding: 1rem 1.7rem;
    cursor: pointer;
  }

  > span {
    font-size: 0.8rem;
    font-weight: 400;
    color: #000000;
    padding-left: 2rem;
  }
`;

export const VisualizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 6px dashed #a1a1a1;
  height: 50%;
  width: 30%;
  padding: 2rem;
  > h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #3a3a3a;
  }
  > div {
    height: 50px;
    width: 50px;
    background-color: red;
  }
`;
