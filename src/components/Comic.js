import React,{ PureComponent } from 'react';
import thrasher from '../../public/assetics/icons/btn-delete.png';

class Comic extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { id, dispatcher } = this.props;
    localStorage.removeItem(id);
    dispatcher.dispatch({
      type: 'removeComic'
    });
  }

  render() {
    const { imgSrc, title } = this.props;
    return(
      <div className="display-flex align-center justify-center flex-wrap position-relative margin-top-1rem">
        <img className="width-100" src={imgSrc} alt="comic image"/>
        <h5 className="bold">{title}</h5>
        <img className="thrasher" src={thrasher} onClick={ this.handleDelete } alt="delete"/>
      </div>
    );
  }
}

export default Comic;