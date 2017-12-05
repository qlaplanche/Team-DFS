import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Logo from '../img/DFS.png';
// Les images ici

import AppBarDFS from './AppBarDFS';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '90%',
    height: 900,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: Logo,
    name: 'Quentin Laplanche',
    fonction: 'Capitaine de l\'équipe',
  },
  {
    img: Logo,
    name: 'Gaëtan Menat',
    fonction: 'Responsable Back-end',
  },
  {
    img: Logo,
    name: 'Jérémy Petit',
    fonction: 'Le Designer (Génie du web)',
  },
  {
    img: Logo,
    name: 'Alexandre Poincet',
    fonction: 'Le raleur de la base de données',
  },
  {
    img: Logo,
    name: 'Pierre Hourquebie',
    fonction: 'pierre ',
  },
  {
    img: Logo,
    name: 'Yann Caumartin',
    fonction: 'Le respo Git',
  },
  {
    img: Logo,
    name: 'Joffrey Laurent',
    fonction: 'L\'Alcoolic',
  },
  {
    img: Logo,
    name: 'Arthur Charles',
    fonction: 'Le petit blésois',
  },
  {
    img: Logo,
    name: 'Pierrick',
    fonction: 'pierrick',
  },
  {
    img: Logo,
    name: 'Corentin',
    fonction: 'coco',
  },
];


const TeamGrid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={240}
      style={styles.gridList}
      cols={5}
    //   padding={10}
    >
      <Subheader>Composition de l'équipe</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.name}
          subtitle={<span><b>{tile.fonction}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default TeamGrid;