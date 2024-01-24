import { Capa, FormContainer, LoginContainer } from "./style";
import capa from "../../assets/LoginCapa.png";
import logo from "../../assets/Logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface iRegisterUserProps {
  email: string;
  password: string;
}

const LoginPage = () => {
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
        <FormContainer onSubmit={handleSubmit((data) => console.log(data))}>
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
