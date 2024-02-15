import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  > button {
    background-color: #8b38ff;
    border: none;
    width: max-content;
    padding: 0.8rem 2.2rem;
    border-radius: 150px;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 10%;
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
    background-color: #8b38ff;
    color: #ffffff;
    font-weight: 400;
    font-size: 1rem;
    border: none;
    border-radius: 150px;
    width: max-content;
    padding: 1rem 1.7rem;
    cursor: pointer;
  }
`;
