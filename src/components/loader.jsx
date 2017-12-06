import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Logo from '../img/DFS.png';
import './css/effect1.css';
import './css/normalize.css';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import TeamStepper from './TeamStepper';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    buttonMargin: {
        padding: '0 1em',
        width: '100%'
    }
}


export default class Loader extends Component {
    render(){
        return(
            <div id="ip-container" className="ip-container">
	            <header className="ip-header">
                        <h1 className="ip-logo">
                            <img src={Logo} alt=""/>
                        </h1>
                        <span className="ip-desc">Finding semicolon</span>
                        <div className="ip-loader">
                            <svg className="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
                                <path className="ip-loader-circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                                <path id="ip-loader-circle" className="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
                            </svg>
                        </div>
                    </header>
                    <div className="ip-main">
                        <h2>Bienvenue sur le site de la Team-DFS</h2>

                        <div style={styles.root}>
                          <RaisedButton label="Accéder au site" disabled />

                            <RaisedButton
                                containerElement={<Link to="/team" />}
                                linkButton={true}
                                label="Voir l'équipe"/>
                        </div>
                        <TeamStepper/>
                    </div>
               </div>
        );
    }
}