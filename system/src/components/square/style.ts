import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
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
    transition: 1s;
  }
  > button:hover {
    background-color: #3e1077;
    color: #f2f2f2;
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
    transition: 1s;
  }
  > label:hover {
    background-color: #3e1077;
    color: #f2f2f2;
  }
`;
export const CropContainer = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

export const ListSquares = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
