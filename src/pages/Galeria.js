import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const acccesKey = process.env.REACT_APP_UNSPLASH_ACCES_KEY;

export default function Galeria() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPhotos();
  }, [page]);

  function getPhotos() {
    fetch(`https://api.unsplash.com/photos?client_id=${acccesKey}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setImages((images) => [...images, ...data]);
      });
  }
  return (
    <>
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={() => {
          setPage((page) => page + 1);
        }}
        hasMore={true}
        loader={<h4>Cargando...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <a
              className="image"
              key={index}
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
