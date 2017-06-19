import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Modal, Button } from 'react-materialize';

class Hero extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.renderComics = this.renderComics.bind(this);
    }
    
    handleOnClick ( url ) {
        const key = 'e767071f1c07f6bb06985528dc9c2ac9';
        const hash = '8794c644644b0b75980c2ed1fce085f1';
        const ts = '1';
        const apiUrl = 'https://gateway.marvel.com/v1/public';
        const comicId = url.substring(url.lastIndexOf('/') + 1);
 
        fetch(`${apiUrl}/comics/${comicId}?apikey=${key}&hash=${hash}&ts=${ts}`)
        .then(response => {
            if(response.code >= 400) {
            throw new Error('Bad response from server')
            }
            return response.json();
        })
        .then( (comic) => {
            if (comic.data.results.length > 0) {
            this.setState({ comic: comic.data.results});
            } else {
            this.setState({ comic: ['Searching...'] });
            }
        }); 
    }

    renderComics() {
        debugger;
        if(this.state !== null && this.state.comic.length > 0 ) {
            
            const comicThings = this.state.comic.map( comicContainer => {
                <div> {comicContainer.id}</div>
            })
            return comicThings;
        } else {
            return <div> Empty desc for this comic</div>;
        }
        
    } 


    render() {
        let pathImg = `${this.props.thumbnail.path}.${this.props.thumbnail.extension}`;
        return (
            <div className="card">
                <div className="card-image col s6">
                    <img src={pathImg} alt={this.props.name} className="circle shadow" />
                </div>
                <div className="col s6">
                    <span className="card-title truncate">{this.props.name}</span>
                    <p className="card-description truncate">{this.props.description || 'No hero description' }.</p>
                </div>
                <div className="col s12 no-padding">
                    <Collapsible>
                        <CollapsibleItem header='View More'>
                            { this.props.comics.items.slice(0, 3).map((comic, i) => {
                                return (
                                    <Modal key={i} header={ comic.name } fixedFooter trigger={ <a className="" onClick={this.handleOnClick(comic.resourceURI)}> { comic.name } </a>}>
                                        <div>
                                            {this.renderComics()}    
                                        </div>

                                    </Modal>
                                ); 
                            }) }
                        </CollapsibleItem>
                    </Collapsible>
                    
                </div>
            </div>   
        );
    }
}

export default Hero;