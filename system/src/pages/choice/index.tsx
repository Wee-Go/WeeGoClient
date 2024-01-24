import { ChoiceContainer, ContentContainer, ItensContainer } from "./style";
import banner from "../../assets/Banner.png";
import cupom from "../../assets/Cupom.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChoicePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("@acessToken");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <ChoiceContainer>
      <ItensContainer>
        <ContentContainer>
          <h2>ESTILO BANNER</h2>
          <img src={banner} alt="banner" />
        </ContentContainer>
        <span>Apenas imagem</span>
      </ItensContainer>

      <ItensContainer>
        <ContentContainer>
          <h2>ESTILO CUPOM</h2>
          <img src={cupom} alt="cupom" />
        </ContentContainer>
        <span>Cupom pré-definidos</span>
      </ItensContainer>
    </ChoiceContainer>
  );
};

export default ChoicePage;
