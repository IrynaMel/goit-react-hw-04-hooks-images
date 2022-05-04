import { Component} from 'react';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { FetchImages } from './API/Api';

import Searchbar from './Searchbar/SearchbarOld';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';
import LoaderSpinner from './Loader/Loader';
import Modal from './Modal/ModalOld';


class App extends Component{
 state ={
   query: '',
   imagesList: [],
   page: 1,
   button: false,
   loading: false,
   showModal: false,
   modalImage: ''
 }

 componentDidUpdate(prevProps, prevState) {
  const prevQuery = prevState.query;
  const nextQuery = this.state.query;
  if (prevQuery !== nextQuery) {
    this.getImages();
    }
   console.log('hi')
  }

getImages=()=>{
  this.setState({loading: true})
 FetchImages(this.state.query, this.state.page)
  .then((imagesList) => {
    
    if(imagesList.length===0){
toast.error(`No images for ${this.state.query}`)
    }
    if(imagesList.length>=12){
      this.setState({button: true})
    }else{
      this.setState({button: false})}
    this.setState((prevState)=>(
      {page: prevState.page + 1,
        imagesList: [...prevState.imagesList, ...imagesList]}))})
  .catch(error=> console.log(error))
  .finally(() => {
    
    this.setState({ loading: false });
  });
}

 handlerFormSubmit = (query)=>{
  this.setState({
    query: query,
    page: 1,
  imagesList:[],
  })
  this.setState({button: false})
  // this.getImages()
  
 }

 onLoadMoreClick=()=>{

   
 this.getImages()

 }

 toggleModal=()=>{
   this.setState(({showModal})=>({
     showModal: !showModal
   }))
 }

 openModal=(largeImageURL)=>{
   this.setState({
     modalImage: largeImageURL
   })
   this.toggleModal()
 }
 
 
  render(){
    const {imagesList, button, loading, showModal, modalImage}= this.state
  return (
     <div>
      {showModal &&
       (<Modal
       onClose={this.toggleModal}>
        <img src={modalImage}
        alt ='largeImg'/>
        </Modal>)
         }
    <ToastContainer />
    <Searchbar onSubmit={this.handlerFormSubmit}/>
    {loading && <LoaderSpinner />}
    {imagesList &&(
    <ImageGallery
     imagesList ={imagesList}
     modalImage={this.openModal}/>)}
     
     {button && <ButtonLoadMore 
     onClick = {this.onLoadMoreClick}/>}
    </div>
  );
}
};

export default App