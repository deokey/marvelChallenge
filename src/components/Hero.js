import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Modal, Button } from 'react-materialize';
import PropTypes from 'prop-types';
import comicJson from '../mocks/comic.json';  
import ModalBody from './ModalBody';
import close from '../../public/assetics/icons/btn-close.png';

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                comicsId: this.props.comicsId,
            }
        };

        // this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    componentWillMount() {
        const comic = comicJson;
        this.setState({ comicData: comic.data.results})
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

    render() {
        const { thumbnail, name, description, comics } = this.props;
        let pathImg = `${thumbnail.path}.${thumbnail.extension}`;
        const image404 = 'https://www.1and1.es/digitalguide/fileadmin/DigitalGuide/Teaser/not-found-t.jpg';
        const comicData = this.state.comicData[0];
        return (
            <div className="card">
                <div className="card-image col s6">
                    <img src={pathImg} alt={name} className="circle shadow" />
                </div>
                <div className="col s6">
                    <span className="card-title truncate">{name}</span>
                    <p className="card-description truncate">{description || 'No hero description' }.</p>
                </div>
                <div className="col s12 no-padding">
                    <Collapsible>
                        <CollapsibleItem header='View More'>
                            { comics.items.slice(0, 3).map((comic, i) => {
                                return (
                                    <Modal 
                                        key={i}
                                        header={ <div className="modal-header display-flex justify-end"><img src={ close } alt="modal close button" className="modal-action modal-close"/></div> }
                                        trigger={ <a className="col s6"> { comic.name } </a>} >

                                            <ModalBody 
                                                if={comicData > 0}
                                                id={comicData.id}
                                                title={comicData.title}
                                                description={comicData.description}
                                                imgSrc={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`|| image404} />

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

Hero.propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    comics: PropTypes.object.isRequired
}

export default Hero;