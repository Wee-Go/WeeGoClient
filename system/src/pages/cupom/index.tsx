import { useNavigate } from "react-router-dom";
import { FormContainer, MainContainer } from "./style";
import { auth, db, storage } from "../../services/firebaseConfig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { collection, doc, setDoc } from "firebase/firestore";

const CupomPage = () => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const [signOut, loading, errors] = useSignOut(auth);
  const navigate = useNavigate();

  const idUser = localStorage.getItem("@idUser");
  const emailUser = localStorage.getItem("@emailUser");

  async function logOut() {
    const sucess = await signOut();
    if (sucess) {
      toast.success("Deslogado com sucesso!");
      navigate("/login");
      localStorage.clear();
    }
  }

  async function upload(event: any) {
    event.preventDefault();
    const file = event.target[2].files[0];

    const regex = /([^@]+)/;
    const match = emailUser!.match(regex);
    const username = match ? match[1] : null;

    // Verificando se o nome do usuário foi extraído com sucesso
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
        const data = {
          desconto: event.target[1].value,
          descricao: event.target[0].value,
          imgUrl,
        };
        const firestoreRef = collection(db, "ShoppingTijuca", "lojas", "lojas");

        await setDoc(doc(firestoreRef), data);

        // const cityRef = doc(db, "ShoppingTijuca", "lojas");
        // setDoc(cityRef, { capital: true }, { merge: true });
      }
    }
  }

  // useEffect(() => {
  //   if (snapshot) {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImgURL(url);
  //     });
  //     console.log(imgUrl);
  //   }
  // }, [snapshot, imgUrl]);

  return (
    <>
      <h1>wee go</h1>
      <MainContainer>
        <FormContainer onSubmit={upload}>
          <label htmlFor="write">Escreva seu anúncio</label>
          <input type="text" id="write" />

          <label htmlFor="descont">Escreva o valor do desconto</label>
          <input type="number" id="descont" />

          <label htmlFor="banner_pic">Faça upload da imagem de banner</label>
          <input type="file" id="banner_pic" accept=".jpg, .jpeg, .png" />

          <button type="submit">Enviar</button>
        </FormContainer>
        <button onClick={logOut}>Log out</button>
      </MainContainer>
    </>
  );
};

export default CupomPage;
