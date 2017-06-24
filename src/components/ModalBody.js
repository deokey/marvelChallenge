import React, { PureComponent } from 'react';

class ModalBody extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, description, imgSrc } = this.props;
    return(
      <div>
        <p>{title}</p>
        <img src={imgSrc} />
        <p>{description}</p>
      </div>
    );
  }
}

export default ModalBody;