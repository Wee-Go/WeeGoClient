import {
  ContainerComponent,
  GoldCard,
  PlansContainer,
  PlatinumCard,
  SilverCard,
} from "./style";

const Plans = ({ planLoja }: any) => {
  return (
    <ContainerComponent>
      <h2>Nossos planos</h2>
      <PlansContainer>
        <SilverCard>
          <h5>Silver</h5>
          <ul>
            <li>
              Publique Stories com botão de traçamento de rota até a sua loja.
            </li>
            <li>
              Os Stories ficam exibidos com a sua logo no topo da tela principal
              da App
            </li>
          </ul>
          <p>R$ 49,90 / mês</p>
          {planLoja === "silver" ? (
            <span style={{ backgroundColor: "green" }}>Seu plano Atual</span>
          ) : (
            <span>Escolha este plano</span>
          )}
        </SilverCard>
        <GoldCard>
          <h5>Gold</h5>
          <ul>
            <li>
              Destaque no mapa a sua loja, com seu logo junto ao nome da loja +
              publicidade.
            </li>
            <li>Pop-up com botão de traçamento de rota até a sua loja</li>
          </ul>
          <p>R$ 79,90 / mês</p>
          {planLoja === "gold" ? (
            <span style={{ backgroundColor: "green", color: "#fff" }}>
              Seu plano Atual
            </span>
          ) : (
            <span>Escolha este plano</span>
          )}
        </GoldCard>
        <PlatinumCard>
          <h5>Platinum</h5>
          <ul>
            <li>
              Todas as publicidades dos planos Silver e Gold + destaque na busca
              (ADS)
            </li>
          </ul>
          <p>R$ 99,90 / mês</p>
          {planLoja === "platinum" ? (
            <span style={{ backgroundColor: "green" }}>Seu plano Atual</span>
          ) : (
            <span>Escolha este plano</span>
          )}
        </PlatinumCard>
      </PlansContainer>
    </ContainerComponent>
  );
};

export default Plans;
