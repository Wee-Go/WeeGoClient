import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #00000040;
  box-shadow: 5px #00000026;
  padding: 0 5rem;

  > img {
    width: 5%;
  }

  > div {
    > p {
      color: green;
      cursor: pointer;
    }
    > span {
      color: red;
      cursor: pointer;
    }
  }
`;
