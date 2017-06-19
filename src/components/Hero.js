import React, { Component } from 'react';


class Hero extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let pathImg = `${this.props.thumbnail.path}.${this.props.thumbnail.extension}`;
        return (
            <section className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src={pathImg} alt={this.props.name} />
                        </div>
                        <div className="card-content">
                            <span className="card-title">{this.props.name}</span>
                            <p>{this.props.description}.</p>
                        </div>
                    </div>
                </div>
            </section>        
        );
    }
}

export default Hero;