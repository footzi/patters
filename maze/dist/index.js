class MapSite {
    enter() {
        console.log('go');
    }
}
/**
 * Комната
 */
class Room extends MapSite {
    constructor(number) {
        super();
        this.roomNumber = number;
        return this;
    }
    getSide() {
        return '1';
    }
    setSide() {
        return '2';
    }
}
/**
 * Стена
 */
class Wall extends MapSite {
    otherSideFrom() {
    }
}
/**
 * Набор комант
 */
class Maze {
    addRoom() {
    }
}
/**
 * Игра в лабиринт
 */
function game() {
    const maze = new Maze();
    const room1 = new Room(1);
    const room2 = new Room(2);
    console.log(room2);
}
game();
//# sourceMappingURL=index.js.map