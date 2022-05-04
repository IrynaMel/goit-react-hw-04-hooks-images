import { Overlay, Mod } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useEffect} from 'react';

const modalRoot = document.querySelector('#modal-root')

export default function Modal({onClose, children}){


    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      });


    const handleKeyDown = (e) => {
        if (e.code === "Escape") {
          onClose();
        }
      };
    
    const   handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
          onClose();
        }
      };
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <Mod>
                {children}
            </Mod>
        </Overlay>,
        modalRoot,

    )

}