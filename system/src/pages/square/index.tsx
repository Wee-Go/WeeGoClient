import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  MainContainer,
  TitleContainer,
  UploadContainer,
  VisualizationContainer,
} from "./style";
import { db, storage } from "../../services/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { toast } from "react-toastify";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const SquarePage = () => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();

  const navigate = useNavigate();

  const idUser = localStorage.getItem("@idUser");
  const emailUser = localStorage.getItem("@emailUser");
  const { user } = useContext(AuthContext);

  async function upload(event: any) {
    event.preventDefault();

    const file = event.target[2].files[0];

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

        //Métdo para pegar o nome da loja
        const lojaref = collection(db, "ShoppingTijuca", "lojas", "lojas");
        const q = query(lojaref, where("user", "==", `${user?.uid}`));
        let loja: Array<any> = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          loja.push(data);
        });
        const nomeLoja = loja[0].nomeLoja;

        //ciração do objeto de cupom
        const data = {
          titulo: event.target[1].value,
          imgUrl,
          estaAtivo: true,
          nomeLoja,
          user: user?.uid,
        };

        const firestoreRef = collection(
          db,
          "ShoppingTijuca",
          "lojas",
          "lojas",
          `${user?.uid}`,
          "square"
        );

        try {
          await setDoc(doc(firestoreRef), data);
          toast.success("Square Adicionado com Sucesso!");
        } catch (error) {
          toast.error("Algo deu errado!");
          console.log(error);
        }
      }
    }
  }

  return (
    <>
      <MainContainer>
        <FormContainer onSubmit={upload}>
          <TitleContainer>
            <button onClick={() => navigate("/dashboard")}>Voltar</button>
            <h1>Square</h1>
            <label htmlFor="write">Título</label>
            <input
              type="text"
              id="write"
              placeholder="Digite o título do square"
            />
          </TitleContainer>
          <UploadContainer>
            <label htmlFor="banner_pic">Upload de Imagem</label>
            <input type="file" id="banner_pic" accept=".jpg, .jpeg, .png" />
            <span>1200 x 400</span>
          </UploadContainer>

          <button type="submit">Publicar</button>
        </FormContainer>
        <VisualizationContainer>
          <h2>Pré-visualização</h2>
        </VisualizationContainer>
      </MainContainer>
    </>
  );
};

export default SquarePage;
