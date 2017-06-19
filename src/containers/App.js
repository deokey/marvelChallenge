import React, { Component } from 'react';
import Hero from '../components/Hero';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            characters: [],
            comics: [],
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    
    handleOnChange(event) {
        const value = event.target.value;
        this.setState({ search: value });

        const key = 'e767071f1c07f6bb06985528dc9c2ac9';
        const hash = '8794c644644b0b75980c2ed1fce085f1';
        const ts = '1';
        const apiUrl = 'https://gateway.marvel.com:443/v1/public';
        const limit = '10';

        if( value !== '' || value !== null ) {

            fetch(`${apiUrl}/characters?nameStartsWith=${value}&limit=${limit}&apikey=${key}&hash=${hash}&ts=${ts}`)
            .then(response => {
                if(response.code >= 400) {
                    throw new Error('Bad response from server')
                }
                return response.json();
            })
            .then( (characters) => {
                if (characters.data.results.length > 0) {
                    this.setState({ characters: characters.data.results})
                } else {
                    this.setState({ characters: ['buscando'] })
                }
            });
        }

    }

    renderCharacters() {
        const characters = this.state.characters;
        console.log(characters);
        if(characters.length > 0) {
            const characterComponent = characters.map((character) => 
                
                <Hero 
                key={character.id}
                name={character.name}
                description={character.description}
                thumbnail={character.thumbnail}
                />
            );
            return characterComponent;
        } else {
            return <div> EMPTY SEARCH </div>;
        }
    }

    render() {
        return (
            <main>
                <nav>
                    <div className="nav-wrapper">
                        <form className="row display-flex">
                            <a id="logo-container" href="#" className="col s2 display-flex align-center justify-center"><img className="logo" src="public/assetics/logo-marvel.png"/></a>
                            <div className="input-field col s10 no-padding">
                                <input id="search" onChange={this.handleOnChange} value={this.state.search} type="search" placeholder="Search character..." required/>
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="section no-padding">
                    <div className="row">
                    <div className="container">
                        <div className="col s12 m9">
                            <div className="row">
                                { this.renderCharacters() }
                            </div>
                        </div>

                        <div className="col s12 m3 favorites-col">
                        </div>
                    </div>
                    </div>
                </div>
                    
            </main>
        );
    }
}

export default App;