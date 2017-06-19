import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <footer className="page-footer no-padding">
                <div className="footer-copyright">
                    <div className="container display-flex align-center justify-between">
                        <div>
                            Grability -<a className="brown-text text-lighten-3" href="#"> Todos los derechos reservados</a>
                        </div>
                        <img src="public/assetics/grability-logo.png" alt=""/>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;