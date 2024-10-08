import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { storage } from "../../../configs/firebase";
import { CarImages } from "../../../configs/schema";
import db from "../../../configs";
import { eq } from "drizzle-orm";

function UploadImages({ triggerUploadImages, setLoader, carInfo, mode }) {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [editCarImageList, setEditCarImageList] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    if (mode === "edit") {
      setEditCarImageList([]);
      carInfo?.images.forEach((image) => {
        setEditCarImageList((prev) => [...prev, image?.imageUrl]);
      });
    }
  }, [carInfo, mode]);

  useEffect(() => {
    if (triggerUploadImages) {
      UploadImagesToServer();
    }
  }, [triggerUploadImages]);

  const onFileSelected = (e) => {
    const files = e.target.files;
    const newFiles = [];
    const previews = [];

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      if (file.type.startsWith("image/")) {
        newFiles.push(file);
        previews.push(URL.createObjectURL(file));
      } else {
        alert("Only image files are allowed.");
      }
    }

    setSelectedFileList((prev) => [...prev, ...newFiles]);
    setPreviewImages((prev) => [...prev, ...previews]);
  };

  const onImageRemoveFromDB = async (image, index) => {
    await db
      .delete(CarImages)
      .where(eq(CarImages.id, carInfo?.images[index]?.id));

    const imageList = editCarImageList.filter((item) => item !== image);
    setEditCarImageList(imageList);
  };

  const onImageRemoveFromPreview = (index) => {
    const updatedFiles = [...selectedFileList];
    const updatedPreviews = [...previewImages];

    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedFileList(updatedFiles);
    setPreviewImages(updatedPreviews);
  };

  const UploadImagesToServer = async () => {
    setLoader(true);
    await selectedFileList.forEach((file) => {
      const fileName = Date.now() + "." + file.name.split(".").pop();
      const storageRef = ref(storage, "car-marketplace/" + fileName);
      const metaData = { contentType: file.type };

      uploadBytes(storageRef, file, metaData)
        .then(() => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggerUploadImages,
            });
          });
        })
        .catch((error) => console.error("Upload failed", error));

      setLoader(false);
    });
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {mode === "edit" &&
          editCarImageList.map((image, index) => (
            <div
              key={index}
              className="relative group"
            >
              <IoIosCloseCircle
                className="absolute top-2 left-2 text-xl opacity-80 hover:opacity-100 cursor-pointer"
                onClick={() => onImageRemoveFromDB(image, index)}
              />
              <img
                src={image}
                className="w-full h-[130px] object-contain rounded-xl border"
                alt={`edit-preview-${index}`}
              />
            </div>
          ))}

        {previewImages.map((image, index) => (
          <div
            key={index}
            className="relative group"
          >
            <IoIosCloseCircle
              className="absolute top-2 left-2 text-xl opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => onImageRemoveFromPreview(index)}
            />
            <img
              src={image}
              className="w-full h-[130px] object-contain rounded-xl border"
              alt={`selected-preview-${index}`}
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="h-[130px] flex justify-center items-center border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>
    </div>
  );
}

export default UploadImages;
