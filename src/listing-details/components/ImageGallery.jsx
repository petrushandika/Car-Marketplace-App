import React from "react";

function ImageGallery({ carDetail }) {
  return (
    <div>
      <img
        src={carDetail?.images[0].imageUrl}
        className="w-full h-[500px] object-contain rounded-xl lg:object-contain md:object-contain sm:object-contain"
      />
    </div>
  );
}

export default ImageGallery;
