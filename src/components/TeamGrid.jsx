import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

// Les images ici
import Logo from '../img/DFS.png';
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
    fonction: 'Capitaine de l\'équipe',
    citation:'Même quand il a tort le chef a toujours raison !'
  },
  {
    img: Gaetan,
    name: 'Gaëtan Menat',
    fonction: 'Responsable Back-end',
    citation:'Donne moi une citation'
  },
  {
    img: Jeremy,
    name: 'Jérémy Petit',
    fonction: 'Le Designer (Génie du web)',
    citation:'Donne moi une citation'
  },
  {
    img: Alexandre,
    name: 'Alexandre Poincet',
    fonction: 'Le raleur de la base de données',
    citation:'Donne moi une citation'
  },
  {
    img: Pierre,
    name: 'Pierre Hourquebie',
    fonction: 'Le respo course',
    citation:'Donne moi une citation'
  },
  {
    img: Nothing,
    name: 'Yann Caumartin',
    fonction: 'Le respo Git',
    citation:'Donne moi une citation'
  },
  {
    img: Joffrey,
    name: 'Joffrey Laurent',
    fonction: 'L\'Alcoholic',
    citation:'Donne moi une citation'
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