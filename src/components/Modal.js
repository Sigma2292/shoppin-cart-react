import React, { Component } from "react";


class Modal extends React.Component {

    render() {
      const { isOpen, onClose } = this.props;
  
      return (
        <div className={isOpen ? "modal modal--is-open" : "modal"}>
            
          <button onClick={onClose}>close</button>
  
          <p>Transaction Success</p>
        </div>
      );
    }
  }
  
  export default Modal
  