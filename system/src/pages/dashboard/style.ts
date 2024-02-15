import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const LateralMenu = styled.div`
  width: 4%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 3px 8px 0px #00000026;
  border-right: 1px solid #dddddd;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1%;
  > div {
    width: 100%;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.7rem;
  }
  > div > img {
    object-fit: cover;
    width: 50%;
  }
  > #home {
    border: none;
  }
`;

export const MenuHeader = styled.header`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 3%;
  background-color: #ffffff;
  align-items: center;
  gap: 2rem;

  > h1 {
    font-size: 1rem;
    font-weight: 600;
  }
  > div {
    height: content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    > img {
      object-fit: cover;
    }

    > p {
      border: 1px solid #bbbbbb;
      padding: 0.5rem 2rem;
      border-radius: 4px;
    }
  }
`;

export const PageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 87%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DivWeego = styled.div`
  width: 100%;
  height: 30%;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #ffffff;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 9%;
  padding-top: 4%;
  border-radius: 10px;
  > img {
    width: 15%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;

    > img {
      width: 1%;
      object-fit: cover;
    }
    > p {
      font-size: 0.75rem;
    }
  }
`;

export const ContentContainer = styled.main`
  width: 100%;
  height: 60%;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const DivOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem;

  > button {
    background-color: #e0e0e0;
    width: 20%;
    transition: 0.5s;
    padding: 0.7rem;
    border-radius: 150px;
    border: none;
    font-size: 0.75rem;
    font-weight: 600;
    color: #3d3d3d;
  }

  > button:focus {
    background-color: #8b38ff;
    color: #ffffff;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  box-shadow: 4px 0px 4px 0px #00000040;
  background-color: #ffffff;
  padding: 1rem 7%;
`;
