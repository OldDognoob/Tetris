export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//We need a function that i will create the stage for us.
// The stage will be a nested multidimensional array that is will represents rows and columns
//And we will need to export it in order to use it in our components folder

export const createStage = ()=>
// a multidimensional array that represent the grid
//we create an array from something and that comes from another array from the stage heights
// unfortunately, this array will be an empty one
Array.from(Array(STAGE_HEIGHT), ()=>
//we will the supply an arrow function here, where for its row from the stage width , we are going to fill it 
// with another array set it out to 0 and clear
// a value 0 that represents a clean cell  and a property called clear that represents a tetrominos that it didint colaid with the cells
new Array(STAGE_WIDTH).fill([0,'clear'])
)
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    // THIS IS SLOWER!!!
    // return player.tetromino.some((row, y) =>
    //   row.some((cell, x) => {
    //     if (cell !== 0) {
    //       return (
    //         !stage[y + player.pos.y + moveY] ||
    //         !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
    //         stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
    //           'clear'
    //       );
    //     }
    //     return false;
    //   })
    // );
  // Using for loops to be able to return (and break). Not possible with forEach
  for (let y = 0; y < player.tetrominos.length; y += 1) {
    for (let x = 0; x < player.tetrominos[y].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetrominos[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // That we're not go through bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell wer'e moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;
};
