const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
  Matter;

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: width,
    height: height,
    wireframes: true,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

//Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];

World.add(world, walls);

//Maze Generation

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
  // If we've been to this cell, return early
  if (grid[row][column]) {
    return;
  }
  //Mark cell as being visited
  grid[row][column] = true;
  //Assemble randomly-ordered list of neighbors

  //For each neighbor..

  //Check to see if neighbor is out of bounds

  //If we visited that neighbor, go to the next neighbor

  //remove a wall from either horizontals or verticals

  //Visit the next cell
};

stepThroughCell(startRow, startColumn);

console.log(grid);
