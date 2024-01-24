import styled from "styled-components";

export const ChoiceContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ItensContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  cursor: pointer;
  > div {
    transition: 1s;
  }
  > div:hover {
    transform: scale(1.03);
  }

  > span {
    font-size: 2rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 40%;
  border: 10px solid #7d0df8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  > h2 {
    color: #7d0df8;
    font-size: 2.569rem;
    font-weight: 500;
  }

  > img {
    width: 80%;
  }
`;
