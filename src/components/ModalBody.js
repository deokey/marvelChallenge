import React, { PureComponent } from 'react';
import shopButton from '../../public/assetics/icons/shopping-cart-primary.png';
import favouriteButton from '../../public/assetics/icons/btn-favourites-primary.png';
import defaultButton from '../../public/assetics/icons/btn-favourites-default.png';

class ModalBody extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      clicked: false,
    }
  }
  handleOnClick() {
    const { id, title, imgSrc } = this.props;

    const favoriteData = {
      id: id,
      title: title,
      imgSrc: imgSrc
    }

    this.state.clicked ? this.setState({ clicked: false }) : this.setState({ clicked: true });

    // 1. if the object is empty or if clicked add to localStorage
    if(!localStorage.getItem(id) || !this.state.clicked) {
      localStorage.setItem(id, JSON.stringify(favoriteData));
    } else if(this.state.clicked) {
      localStorage.removeItem(id);
    } else {
      console.warn('Error removing/adding comic to LS');
    }
    
  }

  render() {
    const { id, title, description, imgSrc, price } = this.props;
    return(
      <div className="row no-margin">
        <div className="col s4 margin-bot-1rem">
          <img src={imgSrc} className="width-100" />
        </div>
        <div className="col s8 margin-bot-1rem">
          <h4 className="bold">{title}</h4>
           <div dangerouslySetInnerHTML={{ __html: description }} ></div>
        </div>
        <div className="col s12 no-padding">
          <a href="#" onClick={this.handleOnClick}>
            {this.state.clicked  || localStorage.getItem(`favorite${id}`) ? (
              <div className="col s6 modal-favorited-button">
                <img src={favouriteButton} className="margin-right-10px" alt="favorite logo"/>Added to favourites
              </div>
              ) : 
              <div className="col s6 modal-favorite-button">
                <img src={defaultButton} className="margin-right-10px" alt="default logo"/>Add to favourites
              </div> 
            } 
          </a>

          <a href="#" className="col s6 modal-shop-button">
            <img src={shopButton} className="margin-right-10px" alt="shop logo"/>
            Buy for ${price}
          </a>
        </div>
      </div>
    );
  }
}

export default ModalBody;