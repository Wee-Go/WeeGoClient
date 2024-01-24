import { Capa, FormContainer, LoginContainer } from "./style";
import capa from "../../assets/LoginCapa.png";
import logo from "../../assets/Logo.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface iRegisterUserProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  function handleLogin({ email, password }: any) {
    signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (user) {
      user.user.getIdTokenResult().then((data) => {
        window.localStorage.setItem("@acessToken", data.token);
      });
      window.localStorage.setItem("@idUser", user.user.uid);
      toast.success("Logado com Sucesso !");
      console.log(user);

      // navigate("/choice", { replace: true });
    }

    if (error) {
      console.log(error);
      toast.error("Email ou Senha Inválidos");
    }
  }, [user, error, navigate]);

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
            // onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            id="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
            // onChange={(e) => setPassword(e.target.value)}
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
