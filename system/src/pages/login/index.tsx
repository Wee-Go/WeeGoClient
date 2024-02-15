import { Capa, FormContainer, LoginContainer } from "./style";
import capa from "../../assets/LoginCapa.png";
import logo from "../../assets/Logo.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

export interface iRegisterUserProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [signInWithEmailAndPassword, userLogin, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    if (error) {
      console.log(error);
    }
  }, [user]);

  function handleLogin({ email, password }: any) {
    signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (userLogin) {
      window.localStorage.setItem("@idUser", userLogin.user.uid);
      window.localStorage.setItem("@emailUser", userLogin.user.email!);
      toast.success("Logado com Sucesso !");

      navigate("/dashboard", { replace: true });
    }

    if (error) {
      console.log(error);
      toast.error("Email ou Senha Inválidos");
    }
  }, [userLogin, error]);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUserProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Capa>
      <img src={capa} alt="Banner" />
      <LoginContainer>
        <img src={logo} alt="logo" />
        <FormContainer onSubmit={handleSubmit((data) => handleLogin(data))}>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            id="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <button type="submit">Entrar</button>
        </FormContainer>
        <span>Esqueci minha senha</span>
      </LoginContainer>
    </Capa>
  );
};

export default LoginPage;
