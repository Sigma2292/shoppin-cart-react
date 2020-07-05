import React, { Component } from "react";
import Modal from "./Modal";


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cartItems,
      mobileSearch: false,
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
   
  openModal() {
    this.setState({ isModalOpen: true})
  }
  
  closeModal () {
    this.setState({ isModalOpen: false })
  }
  render() {
   
    return (
      <footer>
        <div className="container">
          <div className="cart">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>Quantity</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.totalItems}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td> Total</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
              <div className="product-image">
              <button type="button"onClick={this.openModal}> PROCEED TO CHECKOUT </button>
                <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
                </div>
              
                     
          </div>
        </div>
      
      </footer>
    );
  }
}

export default Footer;

