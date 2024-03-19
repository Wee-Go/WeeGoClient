import {
  CropContainer,
  FormContainer,
  ListStories,
  UploadContainer,
} from "./style";
import { useUploadFile } from "react-firebase-hooks/storage";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import { canvasPreview } from "../Crop/canvasPreview";
import { useDebounceEffect } from "../Crop/useDebounceEffect";
import "react-image-crop/dist/ReactCrop.css";
import CardStorieSquare from "../cards";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const StorieUpload = ({ stories }: any) => {
  const [uploadFile, uploading, snapshot, error] = useUploadFile();

  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [aspect, setAspect] = useState<number | undefined>(9 / 16);

  const { upload } = useContext(AuthContext);

  //começa aqui
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop]
  );

  //termina aqui

  return (
    <>
      <FormContainer onSubmit={(event) => upload(event, "stories")}>
        <UploadContainer>
          <label htmlFor="banner_pic">Selecione seu Storie</label>
          <input
            type="file"
            id="banner_pic"
            accept=".jpg, .jpeg, .png"
            onChange={onSelectFile}
          />
        </UploadContainer>
        {!!imgSrc && (
          <CropContainer>
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              maxWidth={200}
              maxHeight={350}
              minWidth={171}
              minHeight={234}
            >
              <img
                ref={imgRef}
                alt="Crop me"
                src={imgSrc}
                onLoad={onImageLoad}
              />
            </ReactCrop>
            {completedCrop && (
              <>
                <div>
                  <canvas
                    ref={previewCanvasRef}
                    style={{
                      border: "1px solid black",
                      objectFit: "contain",
                      width: completedCrop.width,
                      height: completedCrop.height,
                      margin: "0 auto",
                      display: "none",
                    }}
                  />
                </div>
              </>
            )}
          </CropContainer>
        )}

        <button type="submit">Publicar</button>
      </FormContainer>
      <ListStories>
        {stories?.map((stories: any) => (
          <CardStorieSquare key={stories.imgUrl} card={stories} />
        ))}
      </ListStories>
    </>
  );
};

export default StorieUpload;
