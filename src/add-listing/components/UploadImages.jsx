import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { storage } from "../../../configs/firebase";
import { Button } from "../../components/ui/button";
import { CarImages } from "../../../configs/schema";
import db from "../../../configs";

function UploadImages({ triggerUploadImages, setLoader }) {
  const [selectedFileList, setSelectedFileList] = useState([]);

  useEffect(() => {
    if (triggerUploadImages) {
      UploadImagesToServer();
    }
  }, [triggerUploadImages]);

  const onFileSelected = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      if (file.type.startsWith("image/")) {
        setSelectedFileList((prev) => [...prev, file]);
      } else {
        alert("Only image files are allowed.");
      }
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item !== image);
    setSelectedFileList(result);
  };

  const UploadImagesToServer = async () => {
    setLoader(true);
    await selectedFileList.forEach((file) => {
      const fileName = Date.now() + "." + file.name.split(".").pop();
      const storageRef = ref(storage, "car-marketplace/" + fileName);
      const metaData = {
        contentType: file.type,
      };
      uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Uploaded File");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);

            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggerUploadImages,
            });
          });
        });
      setLoader(false);
    });
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFileList.map((image, index) => (
          <div
            key={index}
            className="relative"
          >
            <IoIosCloseCircle
              className="absolute top-2 right-2 text-lg text-white cursor-pointer"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl"
              alt={`preview-${index}`}
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
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
