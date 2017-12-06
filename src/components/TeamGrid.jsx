import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

// Les images ici
import Gaetan from '../img/gaetan.jpg';
import Alexandre from '../img/alexandre.jpg';
import Quentin from '../img/quentin.jpg';
import Pierre from '../img/pierre.jpg';
import Joffrey from '../img/joffrey.jpg';
import Pierrick from '../img/pierrick.png';
import Jeremy from '../img/jeremy.png';

import Nothing from '../img/nothing.jpg';

import ModalMember from './ModalMember';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '90%',
    // height: 900,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: Quentin,
    name: 'Quentin Laplanche',
    fonction: 'Captain Colon',
    citation:'The only way to gain respect is terror.'
  },
  {
    img: Gaetan,
    name: 'Gaëtan Menat',
    fonction: 'The Solution',
    citation:'If you need me: take an appointment like everyone else.'
  },
  {
    img: Jeremy,
    name: 'Jérémy Petit',
    fonction: ' Webmaster but mostly master of the web',
    citation:'HTML, CSS, JS, PHP : I know everything!'
  },
  {
    img: Alexandre,
    name: 'Alexandre Poincet',
    fonction: ' Grumpy expert in database',
    citation: "Nan mais en vrai c'est vraiment de la merde"
  },
  {
    img: Pierre,
    name: 'Pierre Hourquebie',
    fonction: 'Shopping boy 🛍',
    citation: "Je peux pas trop ce soir, j'dois aller faire les courses."
  },
  {
    img: Nothing,
    name: 'Yann Caumartin',
    fonction: ' Git genius ',
    citation:'Le premier qui génère un conflit...'
  },
  {
    img: Joffrey,
    name: 'Joffrey Laurent',
    fonction: 'L\'Alcoholic 🍺',
    citation:"Il faut ramener de l'alcool pour la nuit de l'info ?"
  },
  {
    img: Nothing,
    name: 'Arthur Charles',
    fonction: 'Le petit blésois',
    citation:'Donne moi une citation'
  },
  {
    img: Pierrick,
    name: 'Pierrick Robic--Butez',
    fonction: 'En recherche d\'un surnom',
    citation:'Donne moi une citation'
  },
  {
    img: Nothing,
    name: 'Corentin Soulet',
    fonction: 'En recherche d\'un surnom',
    citation:'Donne moi une citation'
  },
];


const TeamGrid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={330}
      style={styles.gridList}
      cols={5}
      padding={14}
    >
      <Subheader>Composition de l'équipe</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.name}
          subtitle={<span><b>{tile.fonction}</b></span>}
          actionIcon={<ModalMember  description={tile.citation} name={tile.name} img={tile.img} role={tile.fonction}/>}
        >
          <img src={tile.img} alt={tile.name}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default TeamGrid;