import { useState, useEffect } from "react";
import fetchImg from "../../api/axios";
import "../../assets/styles/containers/gallery.scss";

import { FaRegRectangleXmark } from "react-icons/fa6";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

//elements
import Button from "../../elements/Button";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchImages("fashion", page);
  }, [page]);

  const fetchImages = async (query, page) => {
    try {
      const response = await fetchImg(query, page);
      const newImages = response.data.hits.map((image) => ({
        id: image.id,
        webformatURL: image.webformatURL,
        tags: image.tags,
        largeImageURL: image.largeImageURL,
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (largeImageURL) => {
    setSelectedImage(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const currentIndex = images.findIndex(
    (image) => image.largeImageURL === selectedImage
  );

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex].largeImageURL);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].largeImageURL);
  };

  return (
    <section className="gallery container">
      <h2 className="gallery__title">Just a moment gallery</h2>
      <div className="gallery__block">
        {images.map((item) => (
          <div className="gallery__photo">
            <img
              key={item.id}
              src={item.webformatURL}
              alt={item.tags}
              className="photo"
              onClick={() => openModal(item.largeImageURL)}
            />
          </div>
        ))}
      </div>
      <Button type="secondary" onClick={loadMoreImages}>
        Load More
      </Button>
      {showModal && (
        <div className="gallery__modal">
          <div className="gallery__modal-content">
            <TfiArrowCircleLeft
              onClick={prevSlide}
              className="gallery__prev-arrow"
            />
            <div className="gallery__modal-photo">
              <img src={selectedImage} alt="" />
            </div>
            <TfiArrowCircleRight
              onClick={nextSlide}
              className="gallery__next-arrow"
            />
          </div>
          <FaRegRectangleXmark
            onClick={closeModal}
            className="gallery__close-icon"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
