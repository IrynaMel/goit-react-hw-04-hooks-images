import { useState, useEffect} from 'react';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { FetchImages } from './API/Api';

import Searchbar from './Searchbar/SearchbarOld';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';
import LoaderSpinner from './Loader/Loader';
import Modal from './Modal/ModalOld';

export default function App(){
    const [query, setQuery] = useState('');
    const [imagesList, setImagesList] = useState([]);
    const [page, setPage] = useState(1);
    const [button, setButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [modalImage, setModalImage] = useState('');


   const getImages=()=>{
        FetchImages(query, page)
         .then((imagesList) => {
           setLoading( true)
           if(imagesList.length===0){
       toast.error(`No images for ${query}`)
           }
           if(imagesList.length>=12){
             setButton(true)
           }else{
             setButton(false)}

             setPage((prevState)=>prevState.page+1);
             setImagesList((prevState)=>[...prevState.imagesList, ...imagesList])})

         .catch(error=> console.log(error))
         .finally(() => {
           
           setLoading(false );
         });
       }

       useEffect(()=>{
           getImages()
       }, [query]);

       const handlerFormSubmit = (query)=>{
           setQuery(query);
           setPage(1);
           setImagesList([])};


        const toggleModal=()=>{
           setShowModal(!showModal)
          };

        const openModal=(largeImageURL)=>{
            setModalImage(largeImageURL);
            toggleModal()
          }
         
       
    return (
        <div>
       <Searchbar onSubmit={handlerFormSubmit}/>
       {loading && <LoaderSpinner/>}
       {imagesList &&(
       <ImageGallery
        imagesList ={imagesList}
        modalImage={openModal}/>)}
        {button && <ButtonLoadMore 
        onClick = {getImages}/>}
        <ToastContainer/>
        {showModal &&
          (<Modal
          onClose={this.toggleModal}>
           <img src={modalImage}
           alt ='largeImg'/>
           </Modal>)}
       </div>
     );    
}