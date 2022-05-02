import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import ImageGalleryStyled from './ImageGallery.styled';

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

export default ImageGallery;
