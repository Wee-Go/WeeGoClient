import styled from "styled-components";

export const ContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  gap: 4rem;
  > h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #3d3d3d;
  }
`;

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 100%;
  gap: 1rem;
  width: 100%;
  > div {
    height: 90%;
    width: 18%;
    box-shadow: 0px 4px 10px 0px #00000040;
  }
`;

export const SilverCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
  border-top: 8px solid #828282;
  justify-content: space-around;

  > h5 {
    font-size: 1.3rem;
    font-weight: 700;
  }
  > ul {
    width: 70%;
    height: max-content;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    list-style-type: disc;
    list-style: inside;

    > li {
      width: 100%;
      font-size: 0.75rem;
      font-weight: 500;
      color: #3d3d3d;
      line-height: 25px;
    }
    > li::marker {
      color: #828282;
      font-size: 1.1rem;
    }
  }
  > p {
    font-size: 1.1rem;
    color: #3d3d3d;
    font-weight: 700;
  }
  > span {
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #828282;
    color: #ffffff;
    border-radius: 50px;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
  }
`;
export const GoldCard = styled.div`
  border-top: 8px solid #ffca18;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
  justify-content: space-around;
  > h5 {
    font-size: 1.3rem;
    font-weight: 700;
  }
  > ul {
    width: 70%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: disc;
    list-style: inside;

    > li {
      width: 100%;
      font-size: 0.75rem;
      font-weight: 500;
      color: #3d3d3d;
      line-height: 25px;
    }
    > li::marker {
      color: #ffca18;
      font-size: 1.1rem;
    }
  }
  > p {
    font-size: 1.1rem;
    color: #3d3d3d;
    font-weight: 700;
  }
  > span {
    font-size: 0.75rem;
    background-color: #ffca18;
    color: #393939;
    font-weight: 600;
    border-radius: 50px;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
  }
`;
export const PlatinumCard = styled.div`
  border-top: 8px solid #7d0df8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
  justify-content: space-around;
  > h5 {
    font-size: 1.3rem;
    font-weight: 700;
  }
  > ul {
    width: 70%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: disc;
    list-style: inside;

    > li {
      width: 100%;
      font-size: 0.75rem;
      font-weight: 500;
      color: #3d3d3d;
      line-height: 25px;
    }
    > li::marker {
      color: #7d0df8;
      font-size: 1.1rem;
    }
  }
  > p {
    font-size: 1.1rem;
    color: #3d3d3d;
    font-weight: 700;
    padding-top: 30%;
  }
  > span {
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #7d0df8;
    color: #ffffff;
    border-radius: 50px;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
  }
`;
