import { useForm } from "react-hook-form";
import { DivBackground, FormContainer } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdatePassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { toast } from "react-toastify";

export interface iUpdatePassword {
  password: string;
}

const ModalUpdatePass = ({ closeModalPassword }: any) => {
  const [updatePassword, updating, error] = useUpdatePassword(auth);

  const formSchema = yup.object().shape({
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdatePassword>({
    resolver: yupResolver(formSchema),
  });

  async function updatePass({ password }: iUpdatePassword) {
    try {
      await updatePassword(password);
      toast.success("Senha trocada com sucesso!");
      closeModalPassword();
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  }
  return (
    <>
      <DivBackground>
        <FormContainer onSubmit={handleSubmit((data) => updatePass(data))}>
          <p onClick={closeModalPassword}>X</p>
          <h2>Nova Senha</h2>
          <input
            type="password"
            id="resetPass"
            placeholder="Digite sua nova senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <button type="submit">Mudar Senha</button>
        </FormContainer>
      </DivBackground>
    </>
  );
};

export default ModalUpdatePass;
