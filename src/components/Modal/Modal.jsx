import { Overlay, Mod } from "./Modal.styled";
import { createPortal } from "react-dom";
import { Component} from 'react';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component{

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
      }
      componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
      }
      handleKeyDown = (e) => {
        if (e.code === "Escape") {
          this.props.onClose();
        }
      };
    
      handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
          this.props.onClose();
        }
      };
   
   render(){
    return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <Mod>
                {this.props.children}
            </Mod>
        </Overlay>,
        modalRoot,

    )}
}

export default Modal