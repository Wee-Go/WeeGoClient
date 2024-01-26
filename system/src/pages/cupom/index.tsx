import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, MainContainer } from "./style";
import { storage } from "../../services/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CupomPage = () => {
  const [imgUrl, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);

  function handleUpload(event: any) {
    event.preventDefault();

    const file = event.target[1].files ? event.target[1].files[0] : undefined;
    console.log(file);
    const storageRef = ref(storage, `cupons/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImgURL(url);
        });
      }
    );
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("@acessToken");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <h1>wee go</h1>
      <MainContainer>
        <FormContainer onSubmit={handleUpload}>
          <label htmlFor="write">Escreva seu anúncio</label>
          <input type="text" id="write" />

          <label htmlFor="banner_pic">Faça upload da imagem de banner</label>
          <input type="file" id="banner_pic" accept=".jpg, .jpeg, .png" />

          {/* <label htmlFor="cupom_pic">Faça upload da imagem de faixada</label>
          <input
            type="file"
            id="cupom_pic"
            name="cupom_pic"
            accept=".jpg, .jpeg, .png"
          /> */}

          <button type="submit">Enviar</button>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default CupomPage;
