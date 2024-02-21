import {
  Container,
  ContentContainer,
  DivOptions,
  DivWeego,
  FooterContainer,
  LateralMenu,
  MenuHeader,
  PageContainer,
} from "./style";
import PinLogo from "../../assets/PinLogo.png";
import LogoLojaMenu from "../../assets/LogoLojaMenu.png";
import LogoWeeGo from "../../assets/Logo.png";
import Home from "../../assets/Home.png";
import Phone from "../../assets/PhoneIcon.png";
import Mail from "../../assets/MailIcon.png";
import Notification from "../../assets/Notification.png";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebaseConfig";
import StorieUpload from "../../components/storie";
import SquareUpload from "../../components/square";
import LogoUpload from "../../components/logo";
import { AuthContext } from "../../contexts/UserContext";
import { collection, getDocs, query, where } from "firebase/firestore";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [signOut, loading, errors] = useSignOut(auth);
  const [StorieShow, setStorieShow] = useState(false);
  const [LogoShow, setLogoShow] = useState(true);
  const [SquareeShow, setSquareeShow] = useState(false);
  const [NameLoja, setNameLoja] = useState("");
  const [ClassButtonLogo, setClassButtonLogo] = useState("onFocus");
  const [ClassButtonSquare, setClassButtonSquare] = useState("");
  const [ClassButtonStorie, setClassButtonStorie] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function getName() {
      //Métdo para pegar o nome da loja
      const lojaref = collection(db, "ShoppingTijuca", "lojas", "lojas");
      const q = query(lojaref, where("user", "==", `${user?.uid}`));

      try {
        let loja: Array<any> = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          loja.push(data);
        });
        setNameLoja(loja[0].nomeLoja);
      } catch (error) {}
    }
    getName();
  });

  async function logOut() {
    const sucess = await signOut();
    if (sucess) {
      toast.success("Deslogado com sucesso!");
      navigate("/login");
      localStorage.clear();
    }
  }
  function showStorie() {
    setStorieShow(true);
    setLogoShow(false);
    setSquareeShow(false);
    setClassButtonLogo("");
    setClassButtonSquare("");
    setClassButtonStorie("onFocus");
  }
  function showLogo() {
    setStorieShow(false);
    setLogoShow(true);
    setSquareeShow(false);
    setClassButtonLogo("onFocus");
    setClassButtonSquare("");
    setClassButtonStorie("");
  }
  function showSquare() {
    setStorieShow(false);
    setLogoShow(false);
    setSquareeShow(true);
    setClassButtonLogo("");
    setClassButtonSquare("onFocus");
    setClassButtonStorie("");
  }

  return (
    <Container>
      <LateralMenu>
        <div>
          <img src={PinLogo} alt="PinLogo" />
        </div>
        <div>
          <img src={LogoLojaMenu} alt="LogoLojaMenu" />
        </div>
        <div id="home">
          <img src={Home} alt="Home" />
        </div>
        <button onClick={logOut}>Log out</button>
      </LateralMenu>
      <MenuHeader>
        <h1>Home</h1>
        <div>
          <img src={Notification} alt="" />
          {NameLoja && <p>{NameLoja} </p>}
        </div>
      </MenuHeader>

      <PageContainer>
        <DivWeego>
          <img src={LogoWeeGo} alt="Logo Wee Go" />
          <div>
            <img src={Phone} alt="" />
            <p>+55 00 0000-0000</p>
          </div>
          <div>
            <img src={Mail} alt="" />
            <p>email@weego.com</p>
          </div>
        </DivWeego>
        <ContentContainer>
          <DivOptions>
            <button className={ClassButtonLogo} onClick={showLogo}>
              Imagem logo
            </button>
            <button className={ClassButtonSquare} onClick={showSquare}>
              Square Balão
            </button>
            <button className={ClassButtonStorie} onClick={showStorie}>
              Stories
            </button>
          </DivOptions>
          {StorieShow && <StorieUpload />}
          {LogoShow && <LogoUpload />}
          {SquareeShow && <SquareUpload />}
        </ContentContainer>
      </PageContainer>

      <FooterContainer>
        <img src={LogoWeeGo} alt="Logo Wee Go" />
        <p>
          2024 <strong>WeeGo Technologies®</strong> Todos os direitos reservados
        </p>
        <p>Termos de Uso</p>
        <p>Contato</p>
      </FooterContainer>
    </Container>
  );
};

export default DashboardPage;
