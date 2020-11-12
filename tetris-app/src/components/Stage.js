
import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => (
    //we mapping through the stage array and we getting the row,were each row is an array 
    //that holds the cells and we map through the cells 
    //and for each cell we are going to run the cell component
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
