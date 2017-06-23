import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Modal, Button } from 'react-materialize';
import comicJson from '../mocks/comic.json';  

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                comicsId: this.props.comicsId ,
            }
        };

        // this.handleOnClick = this.handleOnClick.bind(this);
        this.renderComics = this.renderComics.bind(this);
    }
    
    componentWillMount() {
        const comic = comicJson;
        this.setState({ comics: comic.data.results})
    }

    // handleOnClick ( url ) {

    //     const comicId = url.substring(url.lastIndexOf('/') + 1);
 
    //     fetch(`${apiUrl}/comics/${comicId}?apikey=${key}&hash=${hash}&ts=${ts}`)
    //     .then(response => {
    //         if(response.code >= 400) {
    //         throw new Error('Bad response from server')
    //         }
    //         return response.json();
    //     })
    //     .then( (comic) => {
    //         if (comic.data.results.length > 0) {
    //         this.setState({ comic: comic.data.results});
    //         } else {
    //         this.setState({ comic: ['Searching...'] });
    //         }
    //     }); 
    // }

    renderComics() {
        if(this.state !== null && this.state.comics.length > 0 ) {
            
            const comicThings = this.state.comics.title;
            return <div>{ comicThings }</div>;
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
                                    <Modal key={i} header={ comic.name } fixedFooter trigger={ <a className="col s6"> { comic.name } </a>}>
                                        <div>
                                            
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