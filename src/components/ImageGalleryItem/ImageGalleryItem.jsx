import { Li, Img } from './ImageGalleryItem.styled';
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, alt,openModal }) => {
  return (
    <Li >
      <Img
       src={src} 
       alt={alt} 
       onClick={openModal}/>
    </Li>
  );
};

ImageGalleryItem.propTypes ={
  scr: PropTypes.string,
  alt: PropTypes.string,
  openModal: PropTypes.func
}

export default ImageGalleryItem;
