import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import myimg from "./../assets/images/Photo5.jpg";
import myimg2 from "./../assets/images/img1.jpg";
import myimg3 from "./../assets/images/Photo3.jpg";
import myimg4 from "./../assets/images/img11.jpg";
import myimg5 from "./../assets/images/img22.jpg";
import myimg6 from "./../assets/images/img9.jpg";
import myimg7 from "./../assets/images/img15.jpg";
import myimg8 from "./../assets/images/img7.jpg";
import myimg9 from "./../assets/images/img8.jpg";
import myimg10 from "./../assets/images/Photo2.jpg";
import myimg11 from "./../assets/images/img6.jpg";
import myimg12 from "./../assets/images/Photo6.jpg";
import myimg13 from "./../assets/images/ShootatIUT.jpg";
import myimg14 from "./../assets/images/img15.jpg";
import myimg15 from "./../assets/images/imgx.jpg";
import myimg16 from "./../assets/images/Photo4.jpg";

const GalleryView = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const photos = [
    {
      src: myimg,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg2,
      width: 1,
      height: 1,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg3,
      width: 3,
      height: 4,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg4,
      width: 3,
      height: 4,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg5,
      width: 4,
      height: 4,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg6,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg7,
      width: 3,
      height: 4,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg8,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg9,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg10,
      width: 3,
      height: 4,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg11,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg12,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg13,
      width: 4,
      height: 4,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg14,
      width: 4,
      height: 4,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg15,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
    {
      src: myimg16,
      width: 4,
      height: 3,
      title: "A long bliss by Nafisa Mehjabin",
    },
  ];

  return (
    <div>
      <div className="header-space" style={{ height: "80px" }}></div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default GalleryView;
