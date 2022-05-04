

import {TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


const LoaderSpinner = () => {
  return( 
  <TripleMaze  text={"Loading..."} bgColor={"white"} 
    center={true} width={"150px"} height={"150px"}/>
)
  }

export default LoaderSpinner;

