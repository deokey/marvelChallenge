import React, { PureComponent } from 'react';
import defaultButton from '../../public/assetics/icons/btn-favourites-default.png';
import shopButton from '../../public/assetics/icons/shopping-cart-primary.png';
import favouriteButton from '../../public/assetics/icons/btn-favourites-primary.png';

class ModalBody extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      favorites : []
    }
  }

  handleOnClick() {
    const { comicData } = this.props;
    const id = comicData.id;
    this.setState({ favorites: this.state.favorites.concat([comicData])});
    localStorage.setItem('favoriteList', this.state.favorites);
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
          <a href="#" className="col s6 modal-favorite-button" onClick={this.handleOnClick}>
            <img src={defaultButton} className="margin-right-10px" alt="default logo"/>
            To favourites
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