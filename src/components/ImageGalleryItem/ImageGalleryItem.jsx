import { Li, Img } from './ImageGalleryItem.styled';

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

export default ImageGalleryItem;
