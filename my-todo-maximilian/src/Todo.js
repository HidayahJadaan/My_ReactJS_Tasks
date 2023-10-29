import React from "react";
import { useState } from "react"
import Modal from "./Modal";
 import Backdrop from "./Backdrop";

export default function Todo({ title, text }) {
 
    const [ModalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
          setModalIsOpen(true);
    }
      
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    
     
 
    return (
    <div>
      <div class="card">
        <h2>{title}</h2>
        <p>{text}</p>
        <div class="actions">
          <button class="btn" onClick={()=>{deleteHandler()}}>Delete</button>
        </div>
      </div>

     {ModalIsOpen && <Modal /> }
    
     { ModalIsOpen &&  <Backdrop onCancel = {closeModalHandler} />}

     </div>
  );
}
