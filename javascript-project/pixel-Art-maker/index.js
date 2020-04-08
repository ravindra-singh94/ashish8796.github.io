//A function for making div of required no and adding them to a fragment

const makeDivs = (row, column) => {
  let divNo = 0;

  while (divNo < (row * column)) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    fragment.appendChild(grid);
    divNo += 1;
  }
}

//Function for adding grid of given dimensions
function generateGrid(rows, columns) {
  makeDivs(rows, columns);

  //Inseting fragment document
  gridArea.appendChild(fragment);
  console.log(gridArea)

  const styles = `
  grid-template-columns: repeat(${columns}, 20px);
  grid-template-rows: repeat(${rows}, 20px);`;

  gridArea.setAttribute('style', styles);
}

// Generate markUp for grid of given dimentions
const formElem = document.querySelector('form');
const gridRows = document.querySelector('#grid-rows');
const gridColumns = document.querySelector('#grid-columns');
const gridArea = document.querySelector('.grid-area');
const fragment = new DocumentFragment();

formElem.addEventListener('submit', (event) => {
  event.preventDefault();

  const gridHeight = gridRows.value;
  console.log(`gridHeight: ${gridHeight}`);
  const gridWidth = gridColumns.value;
  console.log(`gridWidth: ${gridWidth}`);

  generateGrid(gridHeight, gridWidth);
})

//Setting Up color to the divs in color pallet

function makeColorDivs(arr) {
  for (i of arr) {
    console.log(i);
    let color = document.createElement('div');
    color.classList.add(i);
    colorFragment.appendChild(color);
  }

  colorParent.appendChild(colorFragment);
}

const colorFragment = new DocumentFragment();
const colorParent = document.querySelector('.colors');

const colorArr = ['wuzzy', 'mahogany', 'brick-red', 'scarlet', 'sunset', 'pink', 'red', 'orange', 'neon-carrot', 'sun-glow', 'yellow', 'canary', 'shadow', 'sepia', 'brass', 'gold', 'peach', 'apricot', 'tropical-green', 'green', 'fern', 'screamin-green', 'caribbean', 'sea-green', 'midnight-blue', 'plum', 'purple', 'indigo', 'blue', 'pacific-blue', 'black', 'outer-space', 'grey', 'manatee', 'wild-blue', 'white'];

//Setting up a color pallet
makeColorDivs(colorArr);
