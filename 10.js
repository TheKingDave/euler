function find() {
    const upTo = 2000000;

    const grid = [2, 3, 5, 7];
    for (let i = 3; i < upTo; i += 2) {
        if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            continue;
        }
        grid.push(i);
    }

    for (let i = 2; i < grid.length; i++) {
        const n = grid[i];
        for(let a = i; a < grid.length; a++) {
            if(grid[a] % n === 0 && grid[a] !== n) {
                grid.splice(a, 1);
                a--;
            }
        }
    }

    return grid.reduce((sum, val) => sum + val);
}

console.log(find());