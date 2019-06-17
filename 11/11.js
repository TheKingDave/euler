const fs = require('fs');

function readGrid(fileName) {
    const content = fs.readFileSync(fileName, {encoding: 'utf-8'});
    const split = content.split('\r\n');
    return split.map(l => l.trim().split(' '));
}

function find() {
    let biggest = 0;

    const grid = readGrid('grid.txt');

    for (let i = 0; i < grid.length; i++) {
        for (let a = 0; a < grid[i].length; a++) {
            if (a < grid[i].length - 4) {
                biggest = Math.max(biggest, grid[i][a] * grid[i][a + 1] * grid[i][a + 2] * grid[i][a + 3]);
            }
            if (i < grid.length - 4) {
                biggest = Math.max(biggest, grid[i][a] * grid[i + 1][a] * grid[i + 2][a] * grid[i + 3][a]);
            }
            if (i < grid.length - 4 && a < grid[i].length - 4) {
                biggest = Math.max(biggest, grid[i][a] * grid[i+1][a+1] * grid[i+2][a+2] * grid[i+3][a+3]);
            }
            if (i < grid.length - 4 && a > 3) {
                biggest = Math.max(biggest, grid[i][a] * grid[i+1][a-1] * grid[i+2][a-2] * grid[i+3][a-3]);
            }

        }
    }

    return biggest;
}

console.log(find());