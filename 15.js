function gridConstructor(gridSize) {
  const grid = [];
  for (let row = 0; row <= gridSize; row += 1) {
    for (let col = 0; col <= gridSize; col += 1) {
      grid.push(`${row}${col}`);
    }
  }
  return grid;
}

const size = 20;
const grid = gridConstructor(size);

const ways = [['00']];

function isInGrid(loc) {
  return grid.indexOf(loc) > -1;
}


function goDown(row, col) {
  const newRow = Number(row) + 1;
  const newLoc = `${newRow}${col}`;
  return newLoc;
}

function goRight(row, col) {
  const newCol = Number(col) + 1;
  const newLoc = `${row}${newCol}`;
  return newLoc;
}

function canGoRight(row, col) {
  const right = goRight(row, col);
  if (isInGrid(right)) {
    return true;
  }
  return false;
}

function canGoDown(row, col) {
  const down = goDown(row, col);
  if (isInGrid(down)) {
    return true;
  }
  return false;
}


function improveArray(i) {
  const rowCol = ways[i][ways[i].length - 1];
  const lastRow = rowCol.charAt(0);
  const lastCol = rowCol.charAt(1);
  if (canGoDown(lastRow, lastCol) && !canGoRight(lastRow, lastCol)) {
    //   console.log('Can go down');
    const newLoc = goDown(lastRow, lastCol);
    ways[i].push(newLoc);
    //   console.log(ways);
  }
  if (canGoRight(lastRow, lastCol) && !canGoDown(lastRow, lastCol)) {
    const newLoc = goRight(lastRow, lastCol);
    ways[i].push(newLoc);
  }
  if (canGoRight(lastRow, lastCol) && canGoDown(lastRow, lastCol)) {
    const newRightLoc = goRight(lastRow, lastCol);
    const newDownLoc = goDown(lastRow, lastCol);
    const newRightPath = ways[i].slice();
    newRightPath.push(newRightLoc);
    const newDownPath = ways[i].slice();
    newDownPath.push(newDownLoc);
    ways.splice(i, 1);
    ways.push(newRightPath);
    ways.push(newDownPath);
  }
}

for (let i = 0; ;) {
  if (ways[i] !== undefined) {
    if (ways[i][ways[i].length - 1] !== `${size}${size}`) {
      improveArray(i);
      console.log(ways.length);
    } else {
      i += 1;
      console.log(ways);
    }
  } else {
    console.log(`The number of ways is ${ways.length}`);
    break;
  }
}

// console.log(grid);

