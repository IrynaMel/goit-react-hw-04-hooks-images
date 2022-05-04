import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import ImageGalleryStyled from './ImageGallery.styled';
import PropTypes from "prop-types";

const ImageGallery = ({ imagesList, modalImage }) => {
  return (
    <ImageGalleryStyled>
      {imagesList.map(({ id, webformatURL,largeImageURL, tags,}) => {
        const openModal = () => modalImage(largeImageURL);
        return( <ImageGalleryItem 
        key={id} 
        src={webformatURL} 
        alt={tags} 
        // largeImageURL={largeImageURL}
        openModal={openModal}
        />)
      })}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes ={
  imagesList: PropTypes.array,
  modalImage: PropTypes.string
}

export default ImageGallery;
