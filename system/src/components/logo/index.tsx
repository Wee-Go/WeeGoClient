import { FormContainer, UploadContainer } from "./style";
import { db, storage } from "../../services/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const LogoUpload = () => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();

  const idUser = localStorage.getItem("@idUser");
  const emailUser = localStorage.getItem("@emailUser");
  const { user } = useContext(AuthContext);

  async function upload(event: any) {
    event.preventDefault();

    const file = event.target[0].files[0];

    const regex = /([^@]+)/;
    const match = emailUser!.match(regex);
    const username = match ? match[1] : null;

    // Verificando se o nomeLoja do usuário foi extraído com sucesso
    if (username && file) {
      // Criando a referência no Firebase Storage
      const reference = ref(
        storage,
        `cupons/${username}/${idUser}/${file.name}`
      );

      try {
        await getDownloadURL(reference);
      } catch (error) {
        // Se ocorrer um erro, a pasta não existe, então criamos
        // Criando a pasta
        await uploadBytes(reference, new Uint8Array());
      }

      const result = await uploadFile(reference, file, {
        contentType: "image/jpeg",
      });
      if (result) {
        const imgUrl = await getDownloadURL(result.ref);

        // Atualização da logoUrl
        const firestoreRef = doc(
          db,
          "ShoppingTijuca",
          "lojas",
          "lojas",
          `${user?.uid}`
        );

        try {
          await updateDoc(firestoreRef, {
            logoUrl: imgUrl,
          });
          toast.success("Logo Adicionada com Sucesso!");
        } catch (error) {
          toast.error("Algo deu errado!");
          console.log(error);
        }
      }
    }
  }

  return (
    <FormContainer onSubmit={upload}>
      <UploadContainer>
        <label htmlFor="banner_pic">Selecione sua Logo</label>
        <input
          type="file"
          id="banner_pic"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => {
            console.log(e.target.files![0]);
          }}
        />
      </UploadContainer>

      <button type="submit">Publicar</button>
    </FormContainer>
  );
};

export default LogoUpload;
