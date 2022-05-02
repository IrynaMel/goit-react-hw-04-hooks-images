import { FadingBalls } from "react-cssfx-loading";
import Div from "./Loader.styled";

const LoaderSpinner = () => {
  return (
      <Div>
    <FadingBalls  
     width="50px" 
     height="50px" 
     duration="0.5s" />
     </Div>
  );
};

export default LoaderSpinner;

