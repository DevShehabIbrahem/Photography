import Masonrysearch from "../ImagesComponent/Mansorysearch";
import MasonryLayout from "../ImagesComponent/MasonryLayout";

const Search = () => {
  //Images result From local
  const images = JSON.parse(localStorage.getItem("images"));
  const imagesHome = JSON.parse(localStorage.getItem("imagesHome"));

  return (
    <>
      {images?.hits ? (
        <Masonrysearch items={images?.hits} />
      ) : (
        <>
          <MasonryLayout respons={imagesHome} />
        </>
      )}
    </>
  );
};

export default Search;
